import React from 'react';
import { FirebaseContext } from '../../Contexts/FIrebaseContext';
import { AuthContext } from '../../Contexts/AuthContext';
import { Navigate } from 'react-router'

import { CardsContainer, MainContainer, PageHome, SecondaryCardsContainer, Footer} from './StyledHomePage';

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

    React.useEffect(() => {
        if(oldValues !== null) setHasOldValues(true);
    }, [oldValues])

    React.useEffect(() => {
        if(user === null) return <Navigate to='/login'/>
    }, [user])

    if(user !== null){
        return (
            <PageHome>
                <SidebarElement />
                {isModalVisible ? <Modal type={'New Transaction'} onClickFunction={() => setIsModalVisible(!isModalVisible)}/> : null}
                {isDeleteModalVisible ? <DeleteModal index={objEdit.index} title={objEdit.title} onClickFunction={() => setIsDeleteModalVisible(false)}/> : null}
                {isEditModalVisible ? <Modal type={'Edit Transaction'} index={objEdit.index} oldTitle={objEdit.title} oldAmmount={objEdit.ammount}  onClickFunction={() => setIsEditModalVisible(!isEditModalVisible)}/> : null}
                <MainContainer>
                    {oldValues !== null ?
                        <CardsContainer>
                            <BalanceCard 
                                title='Balance available'
                            />
                            <SecondaryCardsContainer>
                                <DetailsCard type='expense' title='Expenses' ammount={oldValues.oldCashOut.toLocaleString('pt-br', {minimumFractionDigits: 2})} />
                                <DetailsCard type='income' title='Incomes' ammount={oldValues.oldCashIn.toLocaleString('pt-br', {minimumFractionDigits: 2})} />
                            </SecondaryCardsContainer>
                        </CardsContainer>
                    : <LoadingItem color={"#FFF"} />}
                <TransactionContainer isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
                </TransactionContainer>
                
                </MainContainer>
                <Footer>
                    <span>My Wallet - 2021</span>
                </Footer>
            </PageHome>
        )
    }else{
        return <Navigate to = "/login"/>
    }

    
}

export default HomePage;
