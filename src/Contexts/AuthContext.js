import React from 'react';
import { signInWithPopup, signOut  } from "firebase/auth";
import { auth, provider } from '../Helper/FirebaseConfig';

export const AuthContext = React.createContext();

export default function AuthContextProvider({children}){
    const [user, setUser] = React.useState(null);
    const [reference, setReference] = React.useState(null);

    React.useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
                // console.log("USER: ", user);
                const { uid, displayName, photoURL } = user;
                setUser({uid, displayName, photoURL});
            }
        })
    }, []);

    React.useEffect(() =>{
        if(user !== null){
            if(user.uid !== undefined || user.uid !== null){
                setReference(user.uid);
            }
        }else{
            setReference(null);
        }
    }, [user]);

    async function login(){
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log('ok');
            // const { uid, displayName, photoURL } = result;
            // setUser({uid, displayName, photoURL});
        }).catch((error) => {
           console.log("Error: ", error);
        });
    }

    function logout(){
        signOut(auth)
        .then(() => {
            console.log("Logout");
            document.location.reload(true);
            setUser(null);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout, reference }}>
            {children}
        </AuthContext.Provider>
    )
}