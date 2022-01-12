import styled from 'styled-components';
import { colors } from '../../Helper/StyleSheet';

export const MenuContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: end;

    width: 40%;
    height: 100%;

    z-index: 1000;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;

    width: 100%;
    height: 100%;

    cursor: pointer;

    &:hover{
        filter: opacity(.6);
    }
`;

export const HamburgerMenu = styled.span`
    align-self: flex-end;
    
    width: 50px;
    height: 5px;
    background: ${colors.secondary_blue_color};
    border-radius: 6px;
`;