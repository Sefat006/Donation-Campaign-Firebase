import { createContext, useEffect, useState } from "react";
import app from './../Components/Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(loading, user);

    // sign-In 
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // log-Out
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    };

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser ,updateData)
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfile
    }

    // observer
    useEffect( () => {
        const unSubscribe = onAuthStateChanged( auth, (currentUser) => {
            console.log("Auth state changed:", currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            console.log("Cleaning up Auth Observer...");
            unSubscribe();
        };
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children} {/* No extra <div> here */}
        </AuthContext.Provider>
    );
};
export default AuthProvider;