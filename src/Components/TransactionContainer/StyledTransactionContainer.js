import styled from "styled-components";
import { colors, device } from "../../Helper/StyleSheet";

export const TransactionHistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 80%;
    height: 20rem;

    background-color: ${colors.white_color};
    
    border-radius: 10px;
    border: 2px solid #D9D9D9;

    margin-top: 20px;

    @media ${device.mobileL}{
        height: 30rem;
        margin-bottom: 2rem;
    }

    @media ${device.tablet}{
        width: 80%;
        height: 16rem;
    }

    @media ${device.laptop}{
        height: 22rem;
    }

    @media ${device.laptopM}{
        height: 50%;
    }

    @media ${device.laptopL}{
        height: 50%;
        margin-top: 5rem;
    }

    @media ${device.desktop}{
        height: 50%;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) 
    {
       height: 30rem;
    }

    @media only screen 
    and (min-width: 768px)
    and (max-height: 1024px) 
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        height: 30rem;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    padding: .625rem 1.25rem;

    border-radius: 8px 8px 0 0;

    background-color: ${colors.primary_color};

    @media ${device.mobileL}{
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 1.25rem;
    }

    @media ${device.tablet}{
        padding: .575rem 1.25rem;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) 
    {
        padding: 1rem 1.25rem;
    }
    
    @media ${device.laptop}{
        padding: 8px 1.25rem;
    }

    @media ${device.laptopL}{
        padding: 1rem 1.25rem;
    }

`;

export const Text = styled.h3`
    font-size: 1.1rem;
    font-weight: 700;
    color: ${colors.white_color};

    @media ${device.mobileL}{
        font-size: 1.2rem;
    }

    @media ${device.laptopL}{
        font-size: 1.5rem;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) 
    {
        font-size: 1.5rem;
    }
`;

export const ButtonNewTransaction = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${colors.terciary_blue_color};
    padding: .75rem;
    outline: none;
    border: none;
    border-radius: 4px;

    font-size: .85rem;
    font-weight: 600;
    color: ${colors.white_color};

    cursor: pointer;
    transition: .2s ease;

    &:hover{
        filter: opacity(.8);
    }

    &:active{
        filter: opacity(1) saturate(2);
    }

    @media ${device.mobileL}{
        /* height: 30rem; */
        padding: 8px;
        font-size: 1rem;
    }

    @media ${device.laptop}{
        padding: 8px;
        font-size: 12px;
    }

    @media ${device.laptopL}{
        padding: 1rem;
        font-size: 1rem;
        border-radius: 6px;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) 
    {
        padding: 1rem;
        font-size: 1rem;
        border-radius: 6px;
    }
`;

export const TransactionsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    height: 100%;

    padding: 1rem 1rem;
    overflow-y: scroll;
`;
