import styled from 'styled-components';
import { colors } from '../../Helper/StyleSheet';

export const ModalBackdrop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100vh;
    position: absolute;

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
    
`;

export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    width: 100%;

`;

export const ModalTitle = styled.h1`
    font-size: 1.2rem;
    font-weight: 700;
    color: ${colors.green_color};
`;

export const ModalInput = styled.input`
    width: 100%;
    
    background-color: #F0F0F0;
    outline: none;
    border: 1px solid #F0F0F0;
    padding: .365rem;
    border-radius: 4px;
    
    cursor: pointer;
    transition: .3s ease-in-out;

    :focus,
    :hover{
        border-color: ${colors.green_color};
        box-shadow: 0 0 0 1px ${colors.green_color};
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;

    width: 100%;
`; 

export const CancelButton = styled.button`
    width: 7rem;
    height: 2.65rem;

    text-align: center;

    border: 1px solid ${colors.red_color};
    background-color: #fff;
    border-radius: 4px;

    font-size: 1rem;
    font-weight: 500;
    color: ${colors.red_color};

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

    border: 1px solid ${colors.green_color};
    background-color: ${colors.green_color};
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
