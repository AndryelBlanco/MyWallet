import React from 'react';
import { FirebaseContext } from '../../Contexts/FIrebaseContext';

import { GenericText, HistoricContainer, MainContainer, NewTransactionButton, PageHome, TransactionsList, TransactionsMenu } from './StyledHomePage';
import TransactionItem from '../../Components/TransactionItem/TransactionItem'; 
import Modal from '../../Components/Modal/Modal';
import InfoCard from '../../Components/InfoCard/InfoCard';
import LoadingItem from '../../Components/LoadingItem/LoadingItem';


const HomePage = () => {
    const { oldValues, loading } = React.useContext(FirebaseContext);
    const [hasOldValue, setHasOldValues] = React.useState(false);
    const [isModalVisible, setIsModalVisible] = React.useState(false); 

    
    React.useEffect(() => {
        if(oldValues !== null) setHasOldValues(true);
    }, [oldValues])

    return (
        <PageHome>
            {isModalVisible ? <Modal type={'New Transaction'} onClickFunction={() => setIsModalVisible(!isModalVisible)}/> : null}
            <MainContainer>
                {oldValues !== null ?
                    <>
                        <InfoCard
                            title='CashIn'
                            ammount={(oldValues.oldCashIn).toFixed(2)}
                            type='in'
                        />
                        <InfoCard
                            title='Balance'
                            ammount={(oldValues.oldCashIn + oldValues.oldCashOut).toFixed(2)}
                        />
                        <InfoCard
                            title='CashOut'
                            ammount={(oldValues.oldCashOut).toFixed(2)}
                            type='out'
                        />
                    </>
                    :
                    <LoadingItem color={"#FFF"}/>
                }
            </MainContainer>
            <HistoricContainer>
                {loading ? <LoadingItem color={"#42DB29"}/> :
                    <>
                        <TransactionsMenu>
                            <GenericText>Transactions</GenericText>
                            <NewTransactionButton onClick={() => setIsModalVisible(!isModalVisible)}>+ New transaction</NewTransactionButton>
                        </TransactionsMenu>
                        {hasOldValue ?
                            <TransactionsList>
                                {
                                    oldValues.oldHistory.map((transaction, index) => {
                                        return (
                                            <TransactionItem key={index} title={transaction.title} ammount={transaction.ammount} index={index} date={transaction.date}/>
                                        );
                                    })
                                }
                            </TransactionsList>
                            :
                            null 
                        }
                    </> 
                }
            </HistoricContainer>
        </PageHome>
    )
}

export default HomePage;
