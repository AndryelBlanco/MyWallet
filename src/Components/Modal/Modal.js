import React from 'react';
import { DataContext } from '../../Contexts/DataContext';
import { ModalBackdrop, ModalItem, ModalTitle, ModalInput, ButtonsContainer, CancelButton, ConfirmButton, ModalForm } from './StyledForm';

const Modal = (props) => {

    const { setTransactionTitle, setTransactionDate, setTransactionAmmount } = React.useContext(DataContext);


    function handleChange({target}){
        console.log(target.value);
        // switch(target.id){
        //     case 'title':
        //         setTransactionTitle(target.value);
        //         break;
        //     case 'date':
        //         setTransactionDate(target.value);
        //         break;
        //     case 'ammount':
        //             if(target.value === ''){
        //                 setTransactionAmmount('');
        //             }
        //             else{
        //                 setTransactionAmmount(target.value);
        //             }
        //         break;
        //     default: 
        //         break;
        // }
    }

    return (
        <ModalBackdrop>
            <ModalItem>
                <ModalForm>
                    <ModalTitle>New Transaction</ModalTitle>

                    <ModalInput
                        placeholder='Transaction Name'
                        type='text'
                        onChange={handleChange}
                    />
                    <ModalInput
                        placeholder='mm/dd/yyyy'
                        type='date'
                        onChange={handleChange}
                    />
                    <ModalInput
                        placeholder='Transaction Value'
                        type='text'
                        onChange={handleChange}
                    />
                </ModalForm>
                <ButtonsContainer>
                    <CancelButton onClick={props.onClickFunction} >Cancel</CancelButton>
                    <ConfirmButton>Confirm</ConfirmButton>
                </ButtonsContainer>
            </ModalItem>
        </ModalBackdrop>
    )

}

export default Modal;
