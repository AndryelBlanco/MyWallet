import styled from 'styled-components';
import { colors } from '../../Helper/StyleSheet';


export const ModalBackdrop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 110vh;
    position: absolute;
    z-index: 100;

    background-color: rgba(0, 0, 0, .7);
`;

export const ModalItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    width: 26rem;
    background-color: #FFF;
    padding: 1rem;
    border-radius: 8px;
    
    transition: 1s ease-in-out;
`;

export const ModalTitle = styled.h1`
    font-size: 1.2rem;
    font-weight: 700;
    color: ${colors.red_color};
    text-align: center;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    width: 100%;
`; 

export const CancelButton = styled.button`
    width: 7rem;
    height: 2.65rem;

    text-align: center;

    border: 1px solid ${colors.alternate_color};
    background-color: #fff;
    border-radius: 4px;

    font-size: 1rem;
    font-weight: 500;
    color: ${colors.alternate_color};

    cursor: pointer;
    transition: .2s ease-in-out;

    :hover{
        filter: opacity(.8);
    }
`;

export const ConfirmButton = styled.button`
    width: 7rem;
    height: 2.65rem;

    text-align: center;

    border: 1px solid ${colors.red_color};
    background-color: ${colors.red_color};
    border-radius: 4px;

    font-size: 1rem;
    font-weight: 500;
    color: ${colors.primary_text_color};

    cursor: pointer;
    transition: .2s ease-in-out;

    :hover{
        filter: opacity(.8);
    }
`;
