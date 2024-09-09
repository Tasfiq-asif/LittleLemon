import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import axios from "axios";
import { app } from "../firebase/firebaseConfig";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(null)

    //handle user Login
    const createUser = (email,password) =>{
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
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

    const logOut = async () =>{
        setLoading(true)
        await axios.get(`${import.meta.env.VITE_API_URL}/logout`,{
            withCredentials:true,
        })
        return signOut()
    }

    const updateUserProfile = (name,phone) =>{
        return (auth.currentUser,{displayName:name,phone:phone})
    }

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
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            if(currentUser){
                getToken(currentUser.emai)
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
        updateUserProfile

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