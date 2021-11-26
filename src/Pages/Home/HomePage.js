import React from 'react';
import { FirebaseContext } from '../../Contexts/FIrebaseContext';

import { GenericText, HistoricContainer, MainContainer, NewTransactionButton, PageHome, TransactionsMenu } from './StyledHomePage';
import TransactionItem from '../../Components/TransactionItem/TransactionItem'; 
import Modal from '../../Components/Modal/Modal';
import InfoCard from '../../Components/InfoCard/InfoCard';
import LoadingItem from '../../Components/LoadingItem/LoadingItem';


const HomePage = () => {
    const { totalBalance, oldValues, loading } = React.useContext(FirebaseContext);
    const [isModalVisible, setIsModalVisible] = React.useState(false); 
    const [hasOldValue, setHasOldValues] = React.useState(false);
    
    React.useEffect(() => {
        if(oldValues !== null) setHasOldValues(true);
    }, [oldValues])

    return (
        <PageHome>
            {isModalVisible ? <Modal onClickFunction={() => setIsModalVisible(!isModalVisible)}/> : null}
            <MainContainer>
                {oldValues !== null ?
                    <>
                        <InfoCard
                            title='CashIn'
                            ammount={oldValues.oldCashIn}
                            type='in'
                        />
                        <InfoCard
                            title='Balance'
                            ammount={totalBalance}
                        />
                        <InfoCard
                            title='CashOut'
                            ammount={oldValues.oldCashOut}
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
                            <ul>
                                {oldValues.oldHistory.map( tObj =>
                                    <TransactionItem key={Math.random()} title={tObj.title} ammount={tObj.ammount} date={tObj.date}/>
                                )}
                            </ul>
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
