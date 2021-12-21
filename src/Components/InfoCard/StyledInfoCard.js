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

    @media ${device.laptop}{
        padding: 1rem;
        min-width: 380px;
        width: 80%;
    }

    @media ${device.laptopM}{
        height: 11rem;
    }

    @media ${device.laptopL}{
        height: 14rem;
    }
`;

export const CardTitle = styled.span`
    font-size: 1.5rem;
    font-weight: 400;
    color: ${colors.primary_text_color};

    @media ${device.laptopL}{
        font-size: 1.6rem;
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


    @media ${device.laptopL}{
        font-size: 4rem;
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

    @media ${device.laptop}{
        padding: 0rem 1rem;
        width: 100%;
        gap: 4px;
    }

    @media ${device.laptopM}{
        padding: 1rem;
        height: 5rem;
    }

    @media ${device.laptopL}{
        /* width: 15rem; */
        height: 6.45rem;
        padding: 1.2rem;
        gap: 1rem;
    }
`;

export const CardAltTitle = styled.span`
    font-size: 1rem;
    font-weight: 500;
    color: ${colors.primary_text_color};

    @media ${device.laptop}{
        font-size: 1rem;
        font-weight: 600;
    }

    @media ${device.laptopL}{
        font-size: 1.2rem;
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

    @media ${device.laptop}{
        font-size: 1.1rem;
    }

    @media ${device.laptopM}{
        font-size: 1.5rem;
        margin-left: 1.2rem;
        height: fit-content;
    }

    @media ${device.laptopL}{
        font-size: 1.5rem;
        margin-left: 1.2rem;
    }
`;