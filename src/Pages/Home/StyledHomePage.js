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
`;