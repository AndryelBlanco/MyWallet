import styled from 'styled-components';
import { colors } from '../../Helper/StyleSheet';


export const Page = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 100vh;
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    width: 45%;
    height: 100vh;

    background: linear-gradient(166.74deg, rgba(0, 255, 133, 0) 8.89%, #03A456 90.47%), #00FF85;
    padding: 1rem 2rem;
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    width: 55%;
    height: 100vh;

    background-color: #FDFDFD;
`;

export const LogoApp = styled.img`
    max-width: 8rem;
    align-self: flex-start;
`;

export const PiggyImg = styled.img`
    max-width: 32rem;
`;

export const IllustrationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;

    width: 100%;
    height: 100%;

    padding: 1rem;
`;

export const IllustrationText = styled.h2`
    font-size: 2.4rem;
    font-weight: 700;
    color: #FFF;
    text-align: center;
    max-width: 80%;
`;

export const FormTitle = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: ${colors.alternate_color};
`;

export const ButtonGoogle = styled.button`
    display: grid;
    grid-template-columns: 1fr 8fr;
    align-items: center;
    gap: 0.75rem;

    width: 20rem;
    height: fit-content;

    background-color: ${colors.red_color};

    border: none;
    border-radius: 4px;
    padding: .75rem 1rem;

    color: #FFF;
    font-size: 1.2rem;
    font-weight: 700;

    cursor: pointer;
    transition: .5s ease;

    &:hover{
        filter: opacity(.8);
        box-shadow:  17px 17px 34px #d7d7d7,-17px -17px 34px #ffffff;
    }
`;