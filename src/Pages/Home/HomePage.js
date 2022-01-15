import React from 'react';
import { FirebaseContext } from '../../Contexts/FIrebaseContext';
import { AuthContext } from '../../Contexts/AuthContext';
import { Navigate } from 'react-router'
import { CardsContainer, MainContainer, PageHome, SecondaryCardsContainer, Footer, MenuContainer, HamburgerMenu, Menu, OpenedMenu, MenuItem, MenuButtonText, MenuItemContainer, UserNameText, UserPhoto, UserContainer, CloseButton, Xbutton } from './StyledHomePage';
import { ChartsI, HomeI, LogOutI } from './StyledMenuIcons';

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
    const [hamburgerMenuVisible, setHamburgerMenuVisible] = React.useState(false);
    const [ isActive, setIsActive ] = React.useState('Home');
    const [ isClicked, setIsClicked ] = React.useState(false);


    React.useEffect(() => {
        if(oldValues !== null) setHasOldValues(true);
    }, [oldValues])

    React.useEffect(() => {
        if(user === null) return <Navigate to='/login'/>
    }, [user])

    function handleLogout() {
        setIsActive('Logout');
        setIsClicked(false);
        logout();
    }

    if(user !== null){
        return (
            <PageHome>
                <SidebarElement />
                {isModalVisible ? <Modal type={'New Transaction'} onClickFunction={() => setIsModalVisible(!isModalVisible)}/> : null}
                {isDeleteModalVisible ? <DeleteModal index={objEdit.index} title={objEdit.title} onClickFunction={() => setIsDeleteModalVisible(false)}/> : null}
                {isEditModalVisible ? <Modal type={'Edit Transaction'} index={objEdit.index} oldTitle={objEdit.title} oldAmmount={objEdit.ammount}  onClickFunction={() => setIsEditModalVisible(!isEditModalVisible)}/> : null}
                <MainContainer>
                    <MenuContainer hamburgerMenuVisible={hamburgerMenuVisible}>
                        {/* <MenuMobile /> */}
                        {hamburgerMenuVisible ?
                             <OpenedMenu hamburgerMenuVisibl={hamburgerMenuVisible}  className='fadeInAnimationRight'>
                                <CloseButton>
                                    <Xbutton onClick={ () => setHamburgerMenuVisible(false)}>
                                        X 
                                    </Xbutton>
                                </CloseButton>
                                <UserContainer>
                                    <UserPhoto
                                        src={user.photoURL}
                                        alt='User photo' 
                                    />
                                    <UserNameText>{user.displayName}</UserNameText>
                                </UserContainer>
                                    <MenuItemContainer>
                                        <MenuItem  onClick={() => setIsActive('Home')}>
                                            <HomeI />
                                            <MenuButtonText>
                                                Home
                                            </MenuButtonText>
                                        </MenuItem>
                                        <MenuItem disabled>
                                            <ChartsI />
                                            <MenuButtonText>
                                                Charts
                                            </MenuButtonText>
                                        </MenuItem>
                                        <MenuItem 
                                            onClick={() => {
                                            handleLogout()
                                        }}>    
                                            <LogOutI />
                                            <MenuButtonText>
                                                Logout
                                            </MenuButtonText>
                                        </MenuItem>
                                    </MenuItemContainer>
                             </OpenedMenu>
                             :
                            <Menu onClick={ () => setHamburgerMenuVisible(true)} hamburgerMenuVisible={hamburgerMenuVisible}>
                                <HamburgerMenu></HamburgerMenu>
                                <HamburgerMenu></HamburgerMenu>
                                <HamburgerMenu></HamburgerMenu>
                            </Menu>
                        }
                    </MenuContainer>
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
