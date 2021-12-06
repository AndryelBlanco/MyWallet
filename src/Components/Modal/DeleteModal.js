import React from 'react';
import { FirebaseContext } from '../../Contexts/FIrebaseContext';
import { ModalBackdrop, ModalItem, ModalTitle, ButtonsContainer, CancelButton, ConfirmButton, } from './StyledDeleteModal';

const DeleteModal = ({ onClickFunction, title, index }) => {
    const { deleteItemInFirebase } = React.useContext(FirebaseContext);

    function handleDeleteTransaction() {
        deleteItemInFirebase(index);
    }

    return (
        <ModalBackdrop>
            <ModalItem className='fadeInAnimation'>
                <ModalTitle>Delete {title} ?</ModalTitle>
                <ButtonsContainer>
                    <CancelButton onClick={onClickFunction}>Cancel</CancelButton>
                    <ConfirmButton onClick={handleDeleteTransaction}>Yes, delete!</ConfirmButton>
                </ButtonsContainer>
            </ModalItem>
        </ModalBackdrop>
    )
}

export default DeleteModal
