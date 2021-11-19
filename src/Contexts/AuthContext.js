import React from 'react';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../Helper/FirebaseConfig';

export const AuthContext = React.createContext();

export default function AuthContextProvider({children}){
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
                const { uid, displayName, photoURL } = user;
                setUser({uid, displayName, photoURL});
            }
        })
    }, []);

    React.useEffect(() =>{
        // console.log("U: ", user);
    }, [user]);

    function login(){
        signInWithPopup(auth, provider)
        .then((result) => {
            const { uid, displayName, photoURL } = result;
            setUser({uid, displayName, photoURL});
        }).catch((error) => {
           console.log("Error: ", error);
        });
    }

    return (
        <AuthContext.Provider value={{ user, setUser, login}}>
            {children}
        </AuthContext.Provider>
    )
}