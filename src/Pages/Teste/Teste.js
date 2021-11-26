// import React from 'react';
// import { FirebaseContext } from '../../Contexts/FIrebaseContext';

// import { PageHome } from '../Home/StyledHomePage';
// import TransactionItem from '../../Components/TransactionItem/TransactionItem'; 
// import Modal from '../../Components/Modal/Modal';


// const Teste = () => {
//     const { setNewValues, save, totalBalance, oldValues, loading } = React.useContext(FirebaseContext);
//     const [transactionAmmount, setTransactionAmmount] = React.useState('');
//     const [transactionTitle, setTransactionTitle] = React.useState('');
//     const [transactionDate, setTransactionDate] = React.useState('');
//     const [isModalVisible, setIsModalVisible] = React.useState(false);   

//     console.log(oldValues);

//     React.useEffect(() => {
//         if(transactionAmmount < 0){
//             setNewValues({newCashIn: 0, newCashOut: transactionAmmount, newHistory: {
//                 title: transactionTitle,
//                 ammount: transactionAmmount,
//                 date: transactionDate,
//             }});
//         }else{
//             setNewValues({newCashIn: transactionAmmount, newCashOut: 0, newHistory: {
//                 title: transactionTitle,
//                 ammount: transactionAmmount,
//                 date: transactionDate,
//             }});
//         }

//     }, [transactionAmmount, transactionTitle, transactionDate]);
    
//     function handleChange({target}) {
//         switch(target.id){
//             case 'title':
//                 setTransactionTitle(target.value);
//                 break;
//             case 'date':
//                 setTransactionDate(target.value);
//                 break;
//             case 'ammount':
//                 if(target.value === ''){
//                     setTransactionAmmount('');
//                 }else{
//                     convertValue(target.value);
//                 }
//                 break;
//             default: break;
//         }
       
//     }

//     function convertValue(value){
//         const newValue = parseFloat(value);
//         if(newValue){
//             console.log("C: ",newValue);
//             setTransactionAmmount(newValue);
//         }
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         save();
//         setTransactionAmmount('');
//         setTransactionTitle('');
//         setTransactionDate('');
//     }

//     return (
//         <PageHome>
//             {loading ? <h1>Carregando...</h1> :
//                 <>
//                     {isModalVisible ? <Modal onClickFunction={() => setIsModalVisible(!isModalVisible)}/> : null}
//                     <button onClick={() => setIsModalVisible(!isModalVisible)}>Abir Modal</button>
//                     <h1>Balance: {totalBalance}</h1>

//                     {oldValues!== null &&
//                             <ul>
//                                 {
//                                     oldValues.oldHistory.map(tObj => (
//                                         <TransactionItem key={Math.random()} title={tObj.title} ammount={tObj.ammount} date={tObj.date}/>
//                                     ))
//                                 }
//                             </ul> 
//                     }
//                 </> 
//             }
//         </PageHome>
//     )
// }

// export default Teste
