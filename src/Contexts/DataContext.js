import React from 'react';
import { db } from '../Helper/FirebaseConfig';
import { collection, setDoc, getDoc, doc } from "firebase/firestore";

export const DataContext = React.createContext({});

export const DataProvider = ({children}) => {
    const database = db;
    
    const [storedData, setStoredData] = React.useState(false);
    const [totalBalance, setTotalBalance] = React.useState(null);
    const [cashIn, setCashIn] = React.useState(null);
    const [cashOut, setCashOut] = React.useState(null);

    React.useEffect(() => {
        getTransactionData();
    }, [])

    React.useEffect(() =>{
        if(storedData){
            saveTransactionData();
        }
    }, [totalBalance]);
    
        
        async function saveTransactionData(){
            const docRef = collection(database, "Transactions");
            await setDoc(doc(docRef, "newTransaction"),{
                balance: totalBalance,
                cashIn: cashIn,
                cashOut: cashOut,
            })
            .then(() => console.log("object Saved"))
            .catch((e) => console.log("Error: ",e));
        }
        
        async function createFirebaseData(){
            const docRef = collection(database, "Transactions");
            await setDoc(doc(docRef, "newTransaction"), {
                balance: 0,
                cashIn: 0,
                cashOut: 0,
            })
            .then(() => console.log("New Object Created"))
            .catch((e) => console.log("Error: ",e))
            .finally(() => getTransactionData());
        }

        async function getTransactionData(){
            const docRef = doc(database, 'Transactions', "newTransaction");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()){
                const { balance, cashIn, cashOut} = docSnap.data();
                setStoredData(true);
                setTotalBalance(balance);
                setCashIn(cashIn);
                setCashOut(cashOut);
            }else{
                setStoredData(false);
                createFirebaseData();
            }
        }


    return(
        <DataContext.Provider value={{ saveTransactionData, getTransactionData, totalBalance, cashIn, cashOut, setTotalBalance, setCashOut, setCashIn }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => React.useContext(DataContext);