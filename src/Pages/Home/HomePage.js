import React from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { DataContext } from '../../Contexts/DataContext';

const HomePage = () => {
    const { login } = React.useContext(AuthContext);
    const { totalBalance, cashIn, cashOut, setTotalBalance, setCashOut, setCashIn } = React.useContext(DataContext);
    
    const [ currentTransaction, setCurrentTransaction ] = React.useState('');

    React.useEffect(() => {
        setTotalBalance(cashIn + cashOut);
    }, [cashIn, cashOut]);

    // React.useEffect(() => {
    //     if(oldData !== null){
    //         console.log("Old: ", oldData);
    //         setTransaction(oldData);
    //     }
    // }, [oldData])


    // React.useEffect(() => {
    //     setTransaction({
    //         ...transaction,
    //         balance: transaction.cashIn + transaction.cashOut,
    //     });
    // }, [transaction.cashIn, transaction.cashOut])


    function handleChange({target}){
        if(target.value === ''){
            setCurrentTransaction('');
        }else{
            setCurrentTransaction(target.value);
        }
    }


    function handleLogin(){
        login();
    }

    function handleSubmit(e){
        e.preventDefault();
        const convertedValue = parseFloat(currentTransaction);
        console.log(convertedValue);
        if(convertedValue){
            if(convertedValue < 0){
                setCashOut(cashOut + convertedValue);
            }else{
                setCashIn(cashIn + convertedValue);
            }
        }
    }

    
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
                    value={currentTransaction}
                    onChange={handleChange}
                />
                <button>Enviar</button>
            </form>
                <button onClick={handleLogin}>Logar com google</button>
        </div>
    )
}

export default HomePage
