import styled from 'styled-components';
import { colors } from '../../Helper/StyleSheet';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;
    
    width: 20rem;
    height: 8rem;

    background-color: ${colors.terciary_color};
    padding: 1.2rem;
    border-radius: 8px;
    box-shadow: 0px 38px 80px rgba(2, 22, 24, 0.29), 0px 15.8755px 33.4221px rgba(2, 22, 24, 0.208468), 0px 8.4878px 17.869px rgba(2, 22, 24, 0.172871), 
    0px 4.75819px 10.0172px rgba(2, 22, 24, 0.145), 0px 2.52704px 5.32008px rgba(2, 22, 24, 0.117129), 0px 1.05156px 2.21381px rgba(2, 22, 24, 0.0815322);
`;

export const CardTitle = styled.span`
    font-size: 1.2rem;
    font-weight: 400;
    color: ${colors.primary_text_color};
`;

export const CardData = styled.span`
    max-width: 100%;
    font-size: 2.8rem;
    font-weight: 200;
    color: ${props => (props.ammount > 0 ? colors.green_color : colors.red_color || props.ammount === 0 ? colors.primary_text_color : null)};
`;

export const StrongText = styled.span`
    font-weight: 500;
`;