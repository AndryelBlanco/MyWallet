import styled from 'styled-components';
import { colors, device } from '../../Helper/StyleSheet';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    gap: 1.2rem;
    
    width: 50%;
    min-width: 448px;
    height: 10rem;

    /* background: radial-gradient(74% 476.79% at 12.66% 26%, #0559C2 0%, #003373 100%); */
    background: linear-gradient(-45deg, #00736C, #0767DF, #0559C2, #003373);
    background-size: 400% 400%;
    padding: 1rem;
    border-radius: 12px;

    /* @media (max-width: 1366px){
        width: 448px;
    } */
    transition: .5s ease;
    user-select: none;

    :hover{
        background-position: 100% 10%;
    }

    @media ${device.mobileS}{
        min-width: 100%;
        /* height: 100%; */
        justify-content: center;
        align-items: center;
    }

    @media ${device.mobileL}{
        min-width: 100%;
        /* height: 100%; */
        justify-content: center;
        align-items: center;
    }

    @media ${device.tablet}{
        min-width: 100%;
        /* height: 100%; */
        justify-content: center;
        align-items: center;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) 
    {   
        width: 100% !important;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    @media only screen 
    and (min-width: 768px)
    and (max-height: 1024px) 
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        width: 80%;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    @media ${device.laptop}{
        padding: 1rem;
        min-width: 380px;
        width: 80%;
        height: 10rem;
        justify-content: center;
    }

    @media ${device.laptopM}{
        height: 11rem;
    }

    @media ${device.laptopL}{
        height: 100%;
    }

    @media ${device.desktop}{
        padding: 2rem 2rem;
        height: 100%;
    }

   
`;

export const CardTitle = styled.span`
    font-size: 1.5rem;
    font-weight: 400;
    color: ${colors.primary_text_color};

    @media ${device.mobileS}{
        font-size: 1.1rem;
        font-weight: 400;
    }

    @media ${device.mobileL}{
        font-size: 1.1rem;
        font-weight: 400;
    }

    @media ${device.tablet}{
        font-size: 1.3rem;
        font-weight: 400;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) 
    {   
        width: 300px;
        font-size: 1.6rem;
        font-weight: 500;
    }

    @media only screen 
    and (min-width: 768px)
    and (max-height: 1024px) 
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        width: 300px;
        font-size: 1.4rem;
        font-weight: 500;
    }

    @media ${device.laptopL}{
        font-size: 1.6rem;
        font-weight: 500;
    }

    @media ${device.desktop}{
        font-size: 2rem;
        font-weight: 500;
    }

`;

export const CardData = styled.span`
    width: 90%;
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    
    margin-left: 2rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    @media ${device.mobileS}{
        font-size: 2.2rem;
        font-weight: 600;
        text-align: center;
        width: 100%;
        margin-left: 0rem;
    }

    @media ${device.mobileL}{
        /* align-self: center; */
        text-align: center;
        width: 100%;
        margin-left: 0rem;
    }

    @media ${device.tablet}{
        font-size: 2.6rem;
        font-weight: 600;
        text-align: center;
        width: 100%;
        margin-left: 0rem;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) 
    {   
        width: 50%;
    }

    @media only screen 
    and (min-width: 768px)
    and (max-height: 1024px) 
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        width: 70%;
    }

    @media ${device.laptopL}{
        font-size: 4rem;
    }

    @media ${device.desktop}{
        font-size: 8rem;
    }

`;

export const StrongText = styled.span`
    font-weight: 500;
`;

export const CardAlt = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    /* gap: 2rem; */
    
    width: 100%;
    height: 4.475rem;

    background-color: ${props => props.type === 'expense' ? "#FB4C4C" : "#41CE69"};
    padding: 0 1.2rem;
    border-radius: 12px;
    user-select: none;
    transition: .3s ease;

    @media ${device.mobileS}{
        flex-direction: row;
        align-items: center;
        height: 5rem;
        gap: .5rem;
    }


     @media ${device.mobileL}{
        flex-direction: row;
        align-items: center;
        height: 5rem;
        gap: .5rem;
        /* width: 80% !important; */
    }

    @media ${device.tablet}{
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        gap: 1rem;

        height: 5rem;
    }

    @media only screen 
    and (min-width: 768px)
    and (max-height: 1024px) 
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
        width: 50%;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {   
        /* display: none; */
        flex-direction: row !important;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
        width: 50% !important;
        /* min-height: 110px; */
    }


    @media ${device.laptop}{
        padding: 1rem;

        width: 100%;
        height: 4.475rem;
    }

    @media ${device.laptopM}{
        padding: 1rem;
        height: 5rem;
    }

    @media ${device.laptopL}{
        /* justify-content: start; */
        padding: 1rem 1rem;
        height: 46%;
    }

`;

export const CardAltTitle = styled.span`
    font-size: 1rem;
    font-weight: 500;
    color: ${colors.primary_text_color};

    @media ${device.mobileS}{
        font-size: .875rem;
        font-weight: 600;
        width: 5rem;
        /* width: 100%; */
        /* text-align: center; */
    }

    @media ${device.mobileL}{
        font-size: 1.1rem;
        width: 5rem;
        /* width: 100%; */
        /* text-align: center; */
    }

    @media ${device.tablet}{
        font-size: 1.1rem;
        width: 5rem;
        justify-self: start;
        /* text-align: center; */
    }

    @media ${device.laptop}{
        font-size: 1rem;
        font-weight: 600;
    }

    @media ${device.laptopL}{
        font-size: 1rem;
    }

    @media ${device.desktop}{
        font-size: 1.8rem;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) 
    {   
        font-size: 1.4rem;
        /* min-height: 110px; */
    }
`;

export const CardAltData = styled.span`
    width: 11rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: #fff;

    margin-left: 2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    @media ${device.mobileS}{
       width: 100%;
    }

    @media ${device.mobileL}{
        font-size: 1.6rem;
    }

    @media ${device.tablet}{
        width: 50%;
    }

    @media ${device.laptop}{
        font-size: 1.1rem;
    }

    @media ${device.laptopM}{
        font-size: 1.5rem;
        margin-left: 1.2rem;
        height: fit-content;
    }

    @media ${device.laptopL}{
        font-size: 1.8rem;
        margin-left: 1.2rem;
        /* margin-top: 1rem; */
    }

    @media ${device.desktop}{
        width: 17rem;
        font-size: 2.6rem;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) 
    {   
        font-size: 1.4rem;
        width: 17rem;
        text-align: center;
        /* min-height: 110px; */
    }
`;