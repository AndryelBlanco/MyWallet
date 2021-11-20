import React from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { DataContext } from '../../Contexts/DataContext';
import TransactionItem from '../../Components/TransactionItem/TransactionItem'; 

const HomePage = () => {
    const { user, login, logout } = React.useContext(AuthContext);
    const { totalBalance, cashIn, cashOut, setTotalBalance, setCashOut, setCashIn, setTransactionHistory, transactionHistory } = React.useContext(DataContext);
    const [ currentTransaction, setCurrentTransaction ] = React.useState('');
    const [transactionTitle, setTransactionTitle] = React.useState('');
    const [transactionDate, setTransactionDate] = React.useState('');
    const [transactionAmmount, setTransactionAmmount] = React.useState('');

    React.useEffect(() => {
        setTotalBalance(cashIn + cashOut);
    }, [cashIn, cashOut]);

    React.useEffect(() => {
        if(transactionHistory){
            console.log(transactionHistory);
        }
    }, [transactionHistory])

    React.useEffect(() => {
        setCurrentTransaction({
            title: transactionTitle,
            date: transactionDate,
            ammount: transactionAmmount,
        })
    }, [transactionTitle, transactionDate, transactionAmmount]);

    function handleChange({target}){
        switch(target.id){
            case 'title':
                setTransactionTitle(target.value);
                break;
            case 'date':
                setTransactionDate(target.value);
                break;
            case 'ammount':
                    if(target.value === ''){
                        setTransactionAmmount('');
                    }
                    else{
                        setTransactionAmmount(target.value);
                    }
                break;
            default: 
                break;
        }
        
    }

    function handleLogin(){
        login();
    }

    function handleLogout(){
        logout();
    }

    function handleSubmit(e){
        e.preventDefault();
        const convertedValue = parseFloat(transactionAmmount);
        if(convertedValue){
            if(convertedValue < 0){
                setCashOut(cashOut + convertedValue);
            }else{
                setCashIn(cashIn + convertedValue);
            }
        }
        setTransactionHistory([...transactionHistory, currentTransaction]);
    }

    if(user){
        return (
            <div>
                
                <div>
                    <h1>Balance:</h1>
                    <h2>R$ {totalBalance ? totalBalance : '00'}</h2>
                </div>
                <div>
                    <h1>Cash in:</h1>
                    <h2>R$ {cashIn ? cashIn : '00'}</h2>
                </div>
                <div>
                    <h1>Cash out:</h1>
                    <h2>R$ {cashOut ? cashOut : '00'}</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        value={transactionTitle}
                        onChange={handleChange}
                        placeholder='Transaction Title'
                        id='title'
                    />
                    <input 
                        value={transactionAmmount}
                        onChange={handleChange}
                        placeholder='Transaction Ammount'
                        id='ammount'
                    />
                    <input 
                        type='date'
                        onChange={handleChange}
                        id='date'
                    />
                    <button>Enviar</button>
                </form>
        	    
                {transactionHistory.length > 0 &&
                
                    <ul>
                        {
                            transactionHistory.map(tObj => (
                                <TransactionItem key={Math.random()} title={tObj.title} ammount={tObj.ammount} date={tObj.date}/>
                            ))
                        }
                    </ul> 
                
                }


                {user ? <button onClick={handleLogout}>Logout</button> : <button onClick={handleLogin}>Logar com google</button>}
            </div>
        )
    }else{
        return(
            <>
                <h1>...</h1>
                <button onClick={handleLogin}>Logar com google</button>
            </>
        )
    }

    
}

export default HomePage
