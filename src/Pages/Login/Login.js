import React from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { ButtonGoogle, FormTitle, IllustrationContainer, IllustrationText, LeftContainer, LogoApp, Page, PiggyImg, RightContainer, } from './StyledLoginPage';
import { IoLogoGoogle } from "react-icons/io5";

import LogoSvg from '../../Assets/images/LogoAlternate.svg';
import PiggyBank from '../../Assets/images/PigBank.png';
import { Navigate } from 'react-router';

const Login = () => {
    const { user, login, } = React.useContext(AuthContext);

    function handleGoogleLogin() {
        login();
    }

    if(user !== null){
        return <Navigate to='/'/>
    }else{
        return (
            <Page>
                <LeftContainer>
                    <LogoApp src={LogoSvg} />
                    <IllustrationContainer>
                        <PiggyImg src={PiggyBank} />
                        <IllustrationText>Control your finances simply and quickly!</IllustrationText>
                    </IllustrationContainer>
                </LeftContainer>
                <RightContainer>
                    <FormTitle>Sign In</FormTitle>
                    <ButtonGoogle onClick={handleGoogleLogin}>
                        <IoLogoGoogle 
                            size={25}
                        />
                        Sign In With Google
                    </ButtonGoogle>
                </RightContainer>
            </Page>
        )
    }

}

export default Login;
