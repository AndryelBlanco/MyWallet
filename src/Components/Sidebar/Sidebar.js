import React from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import {FooterText, Line, LogoApp, Sidebar, SidebarButton, SidebarButtonsContainer, SidebarButtonText, SidebarFooter, UserContainer, UserNameText, UserPhoto } from './StyledSidebar';
import { HomeI, LogOutI, ChartsI } from './StyledIcons.js';
import { colors } from '../../Helper/StyleSheet';
import { IoHome, IoBarChart } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
import Logo from '../../Assets/images/Logo.png';


const SidebarElement = () => {
    const { logout, user } = React.useContext(AuthContext);
    const [ isClicked, setIsClicked ] = React.useState(false);
    const [ isActive, setIsActive ] = React.useState('Home');
    
    function handleLogout() {
        setIsClicked(false);
        logout();
    }

    if(user !== null){
        return (
            <Sidebar >
                <UserContainer>
                    <UserPhoto
                        src={user.photoURL}
                        alt='User photo' 
                    />
                    <UserNameText>{user.displayName}</UserNameText>
                    <Line/>
                </UserContainer>
                <SidebarButtonsContainer>
                    <SidebarButton active={ isActive === 'Home' ? true : false} onClick={() => setIsActive('Home')}>
                        <HomeI />
                        <SidebarButtonText >
                            Home
                        </SidebarButtonText>
                    </SidebarButton>
                    <SidebarButton disabled>
                        <ChartsI/>
                        <SidebarButtonText>
                            Charts
                        </SidebarButtonText>
                    </SidebarButton>
                    <SidebarButton active={ isActive === 'Logout' ? true : false} onClick={() => setIsActive('Logout')}>
                        <LogOutI/>
                        <SidebarButtonText>
                            Logout
                        </SidebarButtonText>
                    </SidebarButton>
                </SidebarButtonsContainer>
                <SidebarFooter>
                    <LogoApp src={Logo} alt='Application logo'/>
                    <FooterText>v1.0</FooterText>
                </SidebarFooter>
            </Sidebar>
        )
    }else{
        return null
    }
}

export default SidebarElement
