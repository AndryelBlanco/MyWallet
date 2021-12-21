import styled from 'styled-components';
import { colors } from '../../Helper/StyleSheet';

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

`;

export const SecondaryCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    /* width: 48%; */
`;


export const NewTransactionButton = styled.button`
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    transition: .5s ease;

    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    color: ${colors.green_color};

    :hover{
        filter: saturate(2);
    }
`;

export const TransactionsList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    
    width: 100%;
    height: 20rem;

    padding: 1rem;
    overflow-y:scroll;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background: #00FF85;
        border-radius: 100px;
    }
    &::-webkit-scrollbar-track {
        background: #FFFFFF;
    }
`;

export const GenericText = styled.span`
    font-size: 1.1rem;
    font-weight: 400;
    color: ${colors.terciary_text_color};
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-end;
    justify-content: space-between;
    
    width: 100%;
    
    padding: 1.2rem 3rem;
    background-color: ${colors.primary_color};
`;



export const DropDownMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

`;


export const LogoutButton = styled.div`
    display: ${props => (props.isClicked ? 'flex' : 'none' )};
    align-items: center;
    justify-content: center;

    background-color: #FFFFFF;
    padding: .35rem;
    border-radius: 8px;

    top:  3.75rem;
    position: absolute;

    font-size: .765rem;
    font-weight: 600;
    color: ${colors.terciary_color};

    cursor: pointer;
    transition: .5s;
    filter: opacity(.8);

`;