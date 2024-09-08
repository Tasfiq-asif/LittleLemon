import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types";

export const AuthContext = createContext(null)
const auth = getAuth();
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

    const resetPassword = (email) =>{
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    const authInfo ={
        user,
        loading,
        createUserWithEmailAndPassword
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