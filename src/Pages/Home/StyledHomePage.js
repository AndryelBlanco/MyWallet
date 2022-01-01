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

