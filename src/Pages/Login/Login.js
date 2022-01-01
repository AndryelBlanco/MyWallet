import React from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { ButtonGoogle, ButtonsContainer, FormContainer, FormTitle, GenericButton, HeaderLogo, IllustrationContainer, IllustrationText, LeftContainer, LogoApp, LogoText, Page, PiggyImg, RightContainer, } from './StyledLoginPage';
import { IoLogoGoogle } from "react-icons/io5";

import LogoSvg from '../../Assets/images/LogoAlternate.svg';
import LoginImg from '../../Assets/images/Loginimage.svg';
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
                    <HeaderLogo>
                        <LogoApp src={LogoSvg} />
                        <LogoText>V1.0</LogoText>
                    </HeaderLogo>
                    <IllustrationContainer>
                        <PiggyImg src={LoginImg} />
                        <IllustrationText>Control your finances simply and quickly!</IllustrationText>
                    </IllustrationContainer>
                </LeftContainer>
                <RightContainer>
                    <FormContainer>
                        <FormTitle>Sign In</FormTitle>
                        <ButtonsContainer>
                            <ButtonGoogle onClick={handleGoogleLogin}>
                                <IoLogoGoogle 
                                    size={25}
                                />
                                Sign In With Google
                            </ButtonGoogle>
                            <GenericButton>Soon...</GenericButton>
                        </ButtonsContainer>
                    </FormContainer>
                </RightContainer>
            </Page>
        )
    }

}

export default Login;
