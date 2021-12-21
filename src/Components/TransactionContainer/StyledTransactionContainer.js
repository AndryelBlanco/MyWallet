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

    @media ${device.laptop}{
        height: 18rem;
    }

    @media ${device.laptopL}{
        height: 26rem;
        margin-top: 5rem;
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

    @media ${device.laptopL}{
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

    @media ${device.laptop}{
        padding: 8px;
        font-size: 12px;
    }

    @media ${device.laptopL}{
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
