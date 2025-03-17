import { createContext, useEffect, useState } from "react";
import app from './../Components/Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // sign-In 
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // log-Out
    const logOut = () =>{
        return signOut(auth);
    };

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,

    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged( auth, (currentUser) => {
            console.log("Auth state changed:", currentUser);
            setUser(currentUser);
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