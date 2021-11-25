// import React from 'react';
// import { AuthContext } from '../../Contexts/AuthContext';
// import { DataContext } from '../../Contexts/DataContext';
// import TransactionItem from '../../Components/TransactionItem/TransactionItem'; 
// import { PageHome, MainContainer } from './StyledHomePage';
// import InfoCard from '../../Components/InfoCard/InfoCard';
// import Modal from '../../Components/Modal/Modal';

// const HomePage = () => {
//     const { user, login, logout } = React.useContext(AuthContext);
//     const { totalBalance, cashIn, cashOut, setTotalBalance, setCashOut, setCashIn, setTransactionHistory, transactionHistory, transactionTitle, transactionDate, transactionAmmount } = React.useContext(DataContext);

//     const [ currentTransaction, setCurrentTransaction ] = React.useState('');
    

//     const [isModalVisible, setIsModalVisible] = React.useState(false);


//     React.useEffect(() => {
//         setTotalBalance(cashIn + cashOut);
//     }, [cashIn, cashOut]);

//     React.useEffect(() => {
//         if(transactionHistory){
//             console.log(transactionHistory);
//         }
//     }, [transactionHistory])

//     React.useEffect(() => {
//         if(transactionTitle !== null && transactionDate !== null && transactionAmmount !== null){
//             setCurrentTransaction({
//                 title: transactionTitle,
//                 date: transactionDate,
//                 ammount: transactionAmmount,
//             })
//         }
//     }, [transactionTitle, transactionDate, transactionAmmount]);

//     function handleChange({target}){
//         switch(target.id){
//             case 'title':
//                 setTransactionTitle(target.value);
//                 break;
//             case 'date':
//                 setTransactionDate(target.value);
//                 break;
//             case 'ammount':
//                     if(target.value === ''){
//                         setTransactionAmmount('');
//                     }
//                     else{
//                         setTransactionAmmount(target.value);
//                     }
//                 break;
//             default: 
//                 break;
//         }
        
//     }

//     function handleLogin(){
//         login();
//     }

//     function handleLogout(){
//         logout();
//     }

//     function handleSubmit(e){
//         e.preventDefault();
//         const convertedValue = parseFloat(transactionAmmount);
//         if(convertedValue){
//             if(convertedValue < 0){
//                 setCashOut(cashOut + convertedValue);
//             }else{
//                 setCashIn(cashIn + convertedValue);
//             }
//         }
//         setTransactionHistory([...transactionHistory, currentTransaction]);
//     }
    
//     if(user){
//         return (
//             <PageHome>
//                 {isModalVisible ? <Modal onClickFunction={() => setIsModalVisible(!isModalVisible)}/> : null}
//                 <MainContainer>
//                     <InfoCard title='Balance' ammount={totalBalance ? totalBalance : '00'}/>
//                     <InfoCard title='Cash in' type='in' ammount={cashIn ? cashIn : '00'}/>
//                     <InfoCard title='Cash out' type='out' ammount={cashOut ? cashOut : '00'}/>
//                 </MainContainer> 
//                 <form onSubmit={handleSubmit}>
//                     <input 
//                         type='text'
//                         value={transactionTitle}
//                         onChange={handleChange}
//                         placeholder='Transaction Title'
//                         id='title'
//                     />
//                     <input 
//                         value={transactionAmmount}
//                         onChange={handleChange}
//                         placeholder='Transaction Ammount'
//                         id='ammount'
//                     />
//                     <input 
//                         type='date'
//                         onChange={handleChange}
//                         id='date'
//                     />
//                     <button>Enviar</button>
//                 </form>
        	    
//                 {transactionHistory.length > 0 &&
//                     <ul>
//                         {
//                             transactionHistory.map(tObj => (
//                                 <TransactionItem key={Math.random()} title={tObj.title} ammount={tObj.ammount} date={tObj.date}/>
//                             ))
//                         }
//                     </ul> 
//                 }
//                 {user ? <button onClick={handleLogout}>Logout</button> : <button onClick={handleLogin}>Logar com google</button>}
//                 <button onClick={() => setIsModalVisible(!isModalVisible)}>+ New Transaction</button>
//             </PageHome>
//         )
//     }else{
//         return(
//             <>
//                 <h1>...</h1>
//                 <button onClick={handleLogin}>Logar com google</button>
//             </>
//         )
//     }

    
// }

// export default HomePage
