import React from 'react';
import { FirebaseContext } from '../../Contexts/FirebaseContext';
import { AuthContext } from '../../Contexts/AuthContext';
import { Account, DropDownMenu, GenericText, HistoricContainer, LogoApp, LogoContainer, LogoutButton, MainContainer, NewTransactionButton, PageHome, } from './StyledHomePage';
import { Navigate } from 'react-router'

import TransactionItem from '../../Components/TransactionItem/TransactionItem'; 
import Modal from '../../Components/Modal/Modal';
import InfoCard from '../../Components/InfoCard/InfoCard';
import LoadingItem from '../../Components/LoadingItem/LoadingItem';
import DeleteModal from '../../Components/Modal/DeleteModal';
import Logo from '../../Assets/images/LogoAlternate.svg';
import CardAlternate from '../../Components/InfoCard/CardAlternate';
import TransactionContainer from '../../Components/TransactionContainer/TransactionContainer';

const HomePage = () => {
    const { oldValues, loading, isDeleteModalVisible, isEditModalVisible, setIsDeleteModalVisible, setIsEditModalVisible, objEdit } = React.useContext(FirebaseContext);
    const { logout, user } = React.useContext(AuthContext);
    const [hasOldValue, setHasOldValues] = React.useState(false);
    const [isModalVisible, setIsModalVisible] = React.useState(false); 
    const [ isClicked, setIsClicked ] = React.useState(false);

    
    React.useEffect(() => {
        if(oldValues !== null) setHasOldValues(true);
    }, [oldValues])

    React.useEffect(() => {
        if(user === null) return <Navigate to='/login'/>
    }, [user])

    function handleLogout() {
        setIsClicked(false);
        logout();
    }

    if(user !== null){
        return (
            <PageHome>
                {isModalVisible ? <Modal type={'New Transaction'} onClickFunction={() => setIsModalVisible(!isModalVisible)}/> : null}
                {isDeleteModalVisible ? <DeleteModal index={objEdit.index} title={objEdit.title} onClickFunction={() => setIsDeleteModalVisible(false)}/> : null}
                {isEditModalVisible ? <Modal type={'Edit Transaction'} index={objEdit.index} oldTitle={objEdit.title} oldAmmount={objEdit.ammount}  onClickFunction={() => setIsEditModalVisible(!isEditModalVisible)}/> : null}
                <LogoContainer>
                    <LogoApp src={Logo} alt='Application Logo'/>
                    <DropDownMenu>
                        <Account 
                            src={user.photoURL} 
                            onClick={() => setIsClicked(!isClicked)}
                        />
                        <LogoutButton isClicked={isClicked} className='fadeButton' onClick={handleLogout}>
                            Logout
                        </LogoutButton>
                    </DropDownMenu> 
                </LogoContainer>
                <MainContainer onClick={() => setIsClicked(false)}>
                    {/* <button onClick={handleGoogleLogout}>Logout</button> */}
                    {oldValues !== null ?
                        <>
                            <CardAlternate
                                title='CashIn'
                                ammount={(oldValues.oldCashIn).toFixed(2)}
                                type='in'
                            />
                            <InfoCard
                                title='Balance'
                                ammount={(oldValues.oldCashIn + oldValues.oldCashOut).toFixed(2)}
                            />
                            <CardAlternate
                                title='CashOut'
                                ammount={(oldValues.oldCashOut).toFixed(2)}
                                type='out'
                            />
                        </>
                        :
                        <LoadingItem color={"#FFF"}/>
                    }
                </MainContainer>
                <HistoricContainer onClick={() => setIsClicked(false)}>
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
    }else{
        return <Navigate to = "/login"/>
    }

    
}

export default HomePage;
