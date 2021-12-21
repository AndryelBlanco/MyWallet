import styled from 'styled-components';
import { colors } from '../../Helper/StyleSheet';

export const ModalBackdrop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100vh;
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

export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    width: 100%;

`;

export const ModalTitle = styled.h1`
    font-size: 1.2rem;
    font-weight: 700;
    color: ${colors.primary_color};
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
        border-color: ${props => props.isValid ? `${colors.primary_color}` : "red"};
        box-shadow: ${props => props.isValid ? `0 0 0 1px ${colors.primary_color}` : "0 0 0 1px red"};
    }
`;

export const ModalSelect = styled.select`
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
        border-color: ${props => props.isValid ? `${colors.primary_color}` : "red"};
        box-shadow: ${props => props.isValid ? `0 0 0 1px ${colors.primary_color}` : "0 0 0 1px red"};
    }

    option {
        display: flex;

        background: #F0F0F0;

        padding: 0px 2px 1px;

        font-size: 1rem;
        font-weight: 400;
        color: #676767;
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

    border: 1px solid ${colors.primary_color};
    background-color: ${colors.primary_color};
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

export const ErrorMessage = styled.span`
    font-size: 0.875rem;
    color: ${colors.red_color};
    margin-top: -6%;
`;