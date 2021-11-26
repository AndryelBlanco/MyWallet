import styled from 'styled-components';
import { colors } from '../../Helper/StyleSheet';

export const PageHome = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100vh;

    background-color: #FDFDFD;
`;

export const MainContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    width: 100%;
    height: 30%;
    
    padding: 1rem;
    background-color: ${colors.primary_color};
    box-shadow: 0px 80px 80px rgba(0, 0, 0, 0.07), 0px 17.869px 17.869px rgba(0, 0, 0, 0.0417275), 0px 5.32008px 5.32008px rgba(0, 0, 0, 0.0282725);
`;

export const HistoricContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    width: 100%;

    padding: 1rem;
    margin-top: 2rem;
`;

export const TransactionsMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 40rem;
    
    padding: 1rem;
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

export const GenericText = styled.span`
    font-size: 1.1rem;
    font-weight: 400;
    color: ${colors.terciary_text_color};
`;
