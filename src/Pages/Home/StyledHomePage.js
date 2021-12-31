import styled from 'styled-components';
import { colors, device } from '../../Helper/StyleSheet';

export const PageHome = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    /* height: 100vh; */

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

    @media ${device.mobileL}{
        height: fit-content;
        justify-content: center;
        gap: 2rem;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) 
    {
        height: 100vh !important;
        justify-content: center;
        gap: 2rem;
        /* padding: 10rem 0; */
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

    @media ${device.mobileL}{
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
        width: 100%;
    }
  
    @media only screen 
    and (min-width: 768px)
    and (max-height: 1024px) 
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        flex-direction: column;
        width: 100%;
    }

    @media ${device.laptop}{
        height: 30%;
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

    
    @media ${device.mobileL}{
        width: 100%;
        height: 100%;
        justify-content: center;
    }

    /* width: 48%; */
    @media ${device.laptopL}{
        width: 20%;
        height: 100%;
        justify-content: center;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) 
    {
        flex-direction: row;
        justify-content: center;
        width: 100%;

    }

    @media only screen 
    and (min-width: 768px)
    and (max-height: 1024px) 
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }
`;

