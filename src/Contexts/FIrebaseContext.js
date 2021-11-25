import React from 'react';
import { db } from '../Helper/FirebaseConfig';
import { collection, setDoc, getDoc, doc } from "firebase/firestore";
import { AuthContext } from './AuthContext';

export const FirebaseContext = React.createContext({});

export const FirebaseProvider = ({children}) => {
    const database = db;
    const dataRef = collection(database, "Teste");
    const [oldValues, setOldValues] = React.useState(null);
    const [newValues, setNewValues] = React.useState(null);
    const [totalBalance, setTotalBalance] = React.useState(0);

    React.useEffect(() => {
        getDataFromFirebase();
    }, []);
    
    async function save(){
        await setDoc(doc(dataRef, 'Transacoes'),{
            cashIn: oldValues.oldCashIn + newValues.newCashIn,
            cashOut: oldValues.oldCashOut + newValues.newCashOut,
            history: [...oldValues.oldHistory, newValues.newHistory]
        })
        .then(() => {
            console.log("saved");
            console.log("Getting new data...");
            getDataFromFirebase();
            setNewValues(null);
        })
        .catch((e) => console.log("Error: ",e));
    }

    async function getDataFromFirebase(){
        const Ref = doc(database, 'Teste', 'Transacoes');
        const docSnap = await getDoc(Ref);
        if (docSnap.exists()){
            const { cashIn, cashOut, history } = docSnap.data();
            console.log("Existing Cash in: ", cashIn);
            console.log("Existing Cash out: ", cashOut);
            console.log("Existing History: ", history);
            setTotalBalance(cashIn + cashOut);
            setOldValues({
                oldCashIn: cashIn,
                oldCashOut: cashOut,
                oldHistory: history,
            })
        }else{
            console.log("Não tem dados");
            createDataStruct();
        }
    }

    async function createDataStruct(){
        const docRef = collection(database, "Teste");
        await setDoc(doc(docRef, "Transacoes"), {
            cashIn: 0,
            cashOut: 0,
            history: []
        })
        .then(() => console.log("New Object Created"))
        .catch((e) => console.log("Error: ",e))
        .finally(() => {
            getDataFromFirebase()
        });
    }

    return(
        <FirebaseContext.Provider value={{ oldValues, setNewValues, save, totalBalance }}>
            {children}
        </FirebaseContext.Provider>
    )
}

export const useFirebase = () => React.useContext(FirebaseContext);