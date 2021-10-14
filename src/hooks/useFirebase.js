import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../components/firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignInUsing = () => {
        return signInWithPopup(auth, googleProvider)
        //     .then(result => {
        //         console.log(result.user)
        // })
    };
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    };
    // observe user changed or not changed
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, []);
    return {
        user,
        logOut,
        googleSignInUsing
    }
};

export default useFirebase;