import styled from 'styled-components';
import { colors, device } from '../../Helper/StyleSheet';

export const PageHome = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    height: fit-content;

    background-color: #FDFDFD;

   
`;


export const MainContainer = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100vh;

    /* padding: 1rem; */
    background-color: #FAFBFB;
    box-shadow: 0px 80px 80px rgba(0, 0, 0, 0.07), 0px 17.869px 17.869px rgba(0, 0, 0, 0.0417275), 0px 5.32008px 5.32008px rgba(0, 0, 0, 0.0282725);

    @media ${device.mobileS}{
        height: fit-content;
        justify-content: center;
        gap: 2rem;
    }

    @media ${device.mobileL}{
        height: fit-content;
        justify-content: center;
        gap: 2rem;
    }

    @media ${device.tablet}{
        height: fit-content;
        justify-content: center;
        gap: 2rem;
    }

    @media only screen 
    and (min-width: 768px)
    and (max-height: 1024px) 
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        height: 100vh;
        justify-content: center;
        gap: 2rem;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) 
    {
        height: 100vh;
        justify-content: center;
        gap: 2rem;
        /* padding: 10rem 0; */
    }

    @media ${device.laptop}{
       
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        width: 100%;
        height: 100vh;

        /* padding: 1rem; */
        background-color: #FAFBFB;
        box-shadow: 0px 80px 80px rgba(0, 0, 0, 0.07), 0px 17.869px 17.869px rgba(0, 0, 0, 0.0417275), 0px 5.32008px 5.32008px rgba(0, 0, 0, 0.0282725);
    }
    
`;

export const CardsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    align-self: center;
    /* flex-wrap: wrap; */
    gap: 1rem;

    width: 80%;
    
    padding: 1rem 0rem;

    @media ${device.mobileS}{
        flex-direction: column;
        width: 80%;
    }

    @media ${device.mobileL}{
        flex-direction: column;
        width: 80%;
    }

    @media ${device.tablet}{
        flex-direction: column;
        width: 80%;
    }

    @media only screen 
    and (min-width: 768px)
    and (max-height: 1024px) 
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        flex-direction: column;
        width: 80%;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) 
    {
        flex-direction: column;
        width: 80%;
        height: fit-content !important;
        
    }
  

    @media ${device.laptop}{
        display: flex;
        align-items: center;
        justify-content: start;
        align-self: center;
        /* flex-wrap: wrap; */
        gap: 1rem;
        
        height: 30%;
        width: 80%;
        
        padding: 1rem 0rem;
    }
    
    @media ${device.laptopL}{
        height: 25%;
    }

    @media ${device.desktop}{
        height: 25%;
    }

`;

export const SecondaryCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    @media ${device.mobileS}{
        width: 100%;
        height: 100%;
        justify-content: center;
    }
    
    @media ${device.mobileL}{
        width: 100%;
        height: 100%;
        justify-content: center;
    }

    @media ${device.tablet}{
        width: 100%;
        height: 100%;
        justify-content: center;
    }

    @media only screen 
    and (min-width: 768px)
    and (max-height: 1024px) 
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: fit-content;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) 
    {
        flex-direction: row !important;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: fit-content;
    }

    @media ${device.laptop}{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }

    /* width: 48%; */
    @media ${device.laptopL}{
        width: 20%;
        height: 100%;
        justify-content: center;
    }
`;

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end !important;
    justify-self: end;
    position: absolute;

    font-size: 1rem;
    font-weight: 600;
    color: #FFF;

    width: 100%;
    height: 50px;
    z-index: 3;
    padding: 0rem 0 0 10vw;
    background-color: ${colors.primary_color};

    @media ${device.mobileS}{
        padding: 0 0 0 0;
    }

    @media ${device.mobileL}{
        padding: 0 0 0 0;
    }

    @media ${device.tablet}{
        padding: 0 0 0 0;
    }

    @media ${device.laptop}{
        padding: 0rem 0 0 10vw;
        height: 30px;
    }
`;

//HAMBURGER MENU

export const OpenedMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1rem;

    width:50%;
    height: 100vh;

    background: ${colors.secondary_blue_color};
    position: absolute;
    top: 0%;
    padding: 1rem;

    @media ${device.mobileS}{
        display: flex;
        width: 300px
    }

    @media ${device.mobileL}{
        display: flex;
    }

    @media ${device.tablet}{
        display: flex;
    }

    @media ${device.laptop}{
        display: none;
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: end;

    width: 100%;
    height: 65px;
    
    padding: ${props => props.hamburgerMenuVisible ? "0rem 0rem" : "1rem 5rem"};
    position: relative;

    @media ${device.mobileS}{
        display: flex;
        padding: ${props => props.hamburgerMenuVisible ? "0rem 0rem" : "1rem 2rem"};
    }

    @media ${device.mobileL}{
        display: flex;
        padding: ${props => props.hamburgerMenuVisible ? "0rem 0rem" : "1rem 4rem"};
    }

    @media ${device.tablet}{
        display: flex;
        padding: ${props => props.hamburgerMenuVisible ? "0rem 0rem" : "1rem 6rem"};
    }

    @media ${device.laptop}{
        display: none;
    }
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;

    width: 300px;
    /* height: 300px; */

    cursor: pointer;

    &:hover{
        filter: opacity(.6);
    }

    @media ${device.mobileS}{
        display: flex;
    }

    @media ${device.mobileL}{
        display: flex;
    }

    @media ${device.tablet}{
        display: flex;
    }

    @media ${device.laptop}{
        display: none;
    }
`;

export const HamburgerMenu = styled.span`
    align-self: flex-end;
    
    width: 35px;
    height: 4px;
    background: ${colors.secondary_blue_color};
    border-radius: 8px;
    margin-right: 12px;

    @media ${device.mobileS}{
        display: flex;
    }

    @media ${device.mobileL}{
        display: flex;
    }

    @media ${device.tablet}{
        display: flex;
    }

    @media ${device.laptop}{
        display: none;
    }
`;

export const MenuItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    width: 100%;
    height: 60%;

    /* background-color: blue; */
`;

export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    gap: 1rem;

    width: 100%;
    height: 3rem;
    
    padding: 0rem 1rem;
    border:${props => props.active ? `${colors.terciary_blue_color}` : `2px solid transparent`};
    border-radius: 4px;
    /* padding: .375rem; */
    background-color: ${props => props.active ? `${colors.terciary_blue_color}` : `${colors.primary_color}`};
    
    cursor: ${props => !props.disabled ? "pointer" : "not-allowed"};
    filter: ${props => !props.disabled ? "opacity(1)" : "opacity(.4)"};
    transition: .5s ease;

    &:hover{
        filter: ${props => !props.disabled ? "opacity(.875)" : "opacity(.4)"};
        transform: ${props => !props.disabled ? "translateX(2px)" : null};
        border: ${props => !props.disabled ? `2px solid ${colors.blue_hover}` : null};
        /* box-shadow: 0px 0px 8px ${colors.blue_hover}; */
    }

    @media ${device.laptopM}{
        height: 2.4rem;
    }

    @media ${device.laptopL}{
        height: 3rem;
    }

    @media ${device.desktop}{
        height: 5rem;
    }
`;

export const MenuButtonText = styled.span`
    width: 50%;

    font-size: 1.2rem;
    font-weight: 500;
    color: ${colors.white_color};

    @media ${device.laptopL}{
        font-size: 1.2rem;
    }

    @media ${device.desktop}{
        font-size: 2rem;
    }
`;

//USer Menu COntainer

export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 40%;

    @media ${device.laptopL}{
        height: 50%;
    }

    @media ${device.desktop}{
        gap: 2rem;
    }
`;

export const UserPhoto = styled.img`
    display: flex;

    width: 9rem;
    height: 9rem;

    border-radius: 9999999px;
    border: 2px solid ${colors.secondary_color};
    position: relative;
    margin-top: 1rem;
    margin-bottom: 2rem;

    cursor: pointer;
    transition: .3s ease;

    &:hover{
        filter: opacity(.7);
    }

    @media ${device.laptop}{
        width: 7rem;
        height: 7rem;
    }

    @media ${device.laptopL}{
        width: 12rem;
        height: 12rem;
    }

    @media ${device.desktop}{
        width: 18em;
        height: 18rem;
    }
`;

export const UserNameText = styled.h2`
    font-size: 1rem;
    font-weight: 600;
    color: #FFF;

    margin-bottom: .375rem;


    @media ${device.laptopL}{
        font-size: 1.5rem;
    }

    @media ${device.desktop}{
        font-size: 2.2rem;
    }
`;

export const CloseButton = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: end;

    width: 100%;
    padding: 0 1rem;
`;

export const Xbutton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 35px;
    height: 35px;

    background-color: ${colors.red_color};
    border: none;
    border-radius: 999px;

    color: #FFF;
    font-weight: 800;
    font-size: 1.4rem;
    
    cursor: pointer;

    &:hover{
        filter: opacity(.8);
    }
`;