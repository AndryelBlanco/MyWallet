import React from 'react';
import { FirebaseContext } from '../../Contexts/FIrebaseContext';
import { AuthContext } from '../../Contexts/AuthContext';
import { Navigate } from 'react-router'

import { CardsContainer, MainContainer, PageHome, SecondaryCardsContainer, } from './StyledHomePage';


import TransactionItem from '../../Components/TransactionItem/TransactionItem'; 
import Modal from '../../Components/Modal/Modal';
import BalanceCard from '../../Components/InfoCard/BalanceCard';
import LoadingItem from '../../Components/LoadingItem/LoadingItem';
import DeleteModal from '../../Components/Modal/DeleteModal';
import DetailsCard from '../../Components/InfoCard/DetailsCard';
import TransactionContainer from '../../Components/TransactionContainer/TransactionContainer';
import SidebarElement from '../../Components/Sidebar/Sidebar';


const HomePage = () => {
    const { oldValues, loading, isDeleteModalVisible, isEditModalVisible, setIsDeleteModalVisible, setIsEditModalVisible, objEdit } = React.useContext(FirebaseContext);
    const { logout, user } = React.useContext(AuthContext);
    const [hasOldValue, setHasOldValues] = React.useState(false);
    const [isModalVisible, setIsModalVisible] = React.useState(false); 
    const [sidebarVisible, setSidebarVisible] = React.useState(false);

    // React.useEffect(() => {
    //     window.addEventListener('resize', () => {
    //       const myWidth  = window.innerWidth;
    //       console.log("TESTE", myWidth);
    //    })
    //   },[window])

    React.useEffect(() => {
        if(oldValues !== null) setHasOldValues(true);
    }, [oldValues])

    React.useEffect(() => {
        if(user === null) return <Navigate to='/login'/>
    }, [user])

    if(user !== null){
        return (
            <PageHome>
                {isModalVisible ? <Modal type={'New Transaction'} onClickFunction={() => setIsModalVisible(!isModalVisible)}/> : null}
                {isDeleteModalVisible ? <DeleteModal index={objEdit.index} title={objEdit.title} onClickFunction={() => setIsDeleteModalVisible(false)}/> : null}
                {isEditModalVisible ? <Modal type={'Edit Transaction'} index={objEdit.index} oldTitle={objEdit.title} oldAmmount={objEdit.ammount}  onClickFunction={() => setIsEditModalVisible(!isEditModalVisible)}/> : null}
                <SidebarElement />
                <MainContainer>
                    {oldValues !== null ?
                        <CardsContainer>
                            <BalanceCard 
                                title='Balance available'
                            />
                            <SecondaryCardsContainer>
                                <DetailsCard type='expense' title='Expenses' ammount={oldValues.oldCashOut.toFixed(2)} />
                                <DetailsCard type='income' title='Incomes' ammount={oldValues.oldCashIn .toFixed(2)} />
                            </SecondaryCardsContainer>
                        </CardsContainer>
                    : <LoadingItem color={"#FFF"} />}
                <TransactionContainer isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
                    
                </TransactionContainer>
                </MainContainer>
            </PageHome>
        )
    }else{
        return <Navigate to = "/login"/>
    }

    
}

export default HomePage;
