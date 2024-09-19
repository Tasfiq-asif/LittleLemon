import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import axios from "axios";
import { app } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    //handle user Login
    const createUser = (email,password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = async ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    const resetPassword = (email) =>{
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

   


    const logOut = async () => {
      setLoading(true);
      try {
        await axios.get(`${import.meta.env.VITE_API_URL}/logout`,{
            withCredentials:true,
        })
        return await signOut(auth);
        // Returning the promise so it can be awaited elsewhere
      } catch (error) {
        toast.error("Logout failed");
        throw error; // Re-throw the error if needed for further handling
      } finally {
        setLoading(false); // Ensure loading is set to false after the process
      }
    };




   const updateUserProfile = (name) => {
     const currentUser = auth.currentUser;
     if (currentUser) {
       // Update both displayName and phoneNumber in the profile
       return updateProfile(currentUser, {
         displayName: name,
       });
     }
   };


    const getToken = async email =>{
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          {email},
          {withCredentials:true}
        );
        return data
    }

    //onAuthStateChange
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,async(currentUser)=>{
            setUser(currentUser);
            if(currentUser){
               await getToken(currentUser.email)
            }
            setLoading(false)
        })
        return ()=>{ return unsubscribe()}
    },[])


    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        resetPassword,
        logOut,
        updateUserProfile,
        setLoading

    }

    return (
        <div>
            <AuthContext.Provider value={authInfo} >{children}</AuthContext.Provider>
        </div>
    );
};

AuthProviders.propTypes = {
  // Array of children.
  children: PropTypes.array,
};

export default AuthProviders;