import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);




const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // login user 
    const logIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current User inside state change', currentUser);
            setUser(currentUser);

        });

        return () => unSubscribe();

    }, [])
    const authInfo = {
        user,
        createUser,
        logIn
    }

    return (
        < AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    )
};

export default AuthProvider;