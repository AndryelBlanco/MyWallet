import React from 'react';
import { db } from '../Helper/FirebaseConfig';
import { collection, setDoc, getDoc, doc } from "firebase/firestore";

export const FirebaseContext = React.createContext({});

export const FirebaseProvider = ({children}) => {
    const database = db;
    const dataRef = collection(database, "Teste");
    const [oldValues, setOldValues] = React.useState(null);
    const [newValues, setNewValues] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    
    const [objEdit, setObjEdit] = React.useState(null);
    const [isEditModalVisible, setIsEditModalVisible] = React.useState(false); 
    const [isDeleteModalVisible, setIsDeleteModalVisible] = React.useState(false); 

    React.useEffect(() => {
        getDataFromFirebase();
    }, []);
    
    async function save(){
        setLoading(true);
        await setDoc(doc(dataRef, 'Transacoes'),{
            history: [...oldValues.oldHistory, newValues.newHistory]
        })
        .then(() => {
            console.log("saved");
            console.log("Getting new data...");
            getDataFromFirebase();
            setNewValues(null);
        })
        .catch((e) => console.log("Error: ",e))
        .finally(() => setLoading(false));
    }

    async function getDataFromFirebase(){
        setLoading(true);
        const Ref = doc(database, 'Teste', 'Transacoes');
        const docSnap = await getDoc(Ref);
        if (docSnap.exists()){
            const { history } = docSnap.data();
            handleWithData(history)
            setLoading(false)
        }else{
            console.log("Não tem dados");
            createDataStruct();
        }
    }

    function getFirebaseItem(index, title, ammount, date) {
        const transactionToUpdate = oldValues.oldHistory[index];
        const newAmmount = ammount;
        const newTitle = title;
        const newDate = date;

        const updatedTransaction = handleWithUpdate(transactionToUpdate, newAmmount, newTitle, newDate);
        
        const copyOfArray = oldValues.oldHistory;
        copyOfArray.splice(index, 1);
        copyOfArray.push(updatedTransaction);
        updateDataInFirebase(copyOfArray);
        setIsEditModalVisible(false);
    }

    function handleWithUpdate(transactionToUpdate, newAmmount, newTitle, newDate) {
        transactionToUpdate.ammount = newAmmount;
        transactionToUpdate.title = newTitle;
        transactionToUpdate.date = newDate;
        return transactionToUpdate;
    }

    function handleWithData(history) {
        const totalCashOut =  history.reduce(getTotalCashOut, 0);
        const totalCashIn =  history.reduce(getTotalCashIn, 0);
        setOldValues({
            oldCashIn: totalCashIn,
            oldCashOut: totalCashOut,
            oldHistory: history,
        })
    }

    function deleteItemInFirebase(key){
        const index = key;
        const copyOfArray = oldValues.oldHistory;
        copyOfArray.splice(index, 1);
        updateDataInFirebase(copyOfArray);
        setIsDeleteModalVisible(false);
    }

    async function updateDataInFirebase(array){
        setLoading(true);
        await setDoc(doc(dataRef, 'Transacoes'),{
            history: array,
        })
        .then(() => {
            console.log("saved");
            setNewValues(null);
            console.log("Getting new data...");
            getDataFromFirebase();
        })
        .catch((e) => console.log("Error: ",e))
        .finally(() => setLoading(false));
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
            getDataFromFirebase();
        });
    }

    function getTotalCashOut(total, item){
        return  (item.ammount < 0)? total + item.ammount : total;
    }

    function getTotalCashIn(total, item){
        return  (item.ammount >= 0)? total + item.ammount : total;
    }


    return(
        <FirebaseContext.Provider value={{ oldValues, setNewValues, save, loading, getFirebaseItem, deleteItemInFirebase, objEdit, setObjEdit, isDeleteModalVisible,
        setIsDeleteModalVisible, isEditModalVisible, setIsEditModalVisible }}>
            {children}
        </FirebaseContext.Provider>
    )
}

export const useFirebase = () => React.useContext(FirebaseContext);