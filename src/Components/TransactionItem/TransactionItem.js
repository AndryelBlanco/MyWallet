import React from 'react';
import { Container, DeleteButton, EditButton, ItemAmmount, ItemDate, ItemTitle, TransactionInfos } from './StyledTransactionItem';
import { FirebaseContext } from '../../Contexts/FIrebaseContext';
import { ImPencil } from "react-icons/im";
import { IoCloseCircle } from "react-icons/io5";
import Modal from '../Modal/Modal';
import DeleteModal from '../../Components/Modal/DeleteModal';

const TransactionItem = (props) => {
    const { setObjEdit, isDeleteModalVisible, setIsDeleteModalVisible, isEditModalVisible, setIsEditModalVisible } = React.useContext(FirebaseContext);

    function handleEdit() {
        setObjEdit({
            title: props.title,
            ammount: props.ammount,
            index: props.index
        });
        setIsEditModalVisible(true);
    }

    function handleDelete() {
        setObjEdit({
            title: props.title,
            index: props.index
        });
        setIsDeleteModalVisible(true);
    }

    return (
        <Container>
           
            <TransactionInfos>
                <ItemTitle>{props.title}</ItemTitle>
                <ItemDate>{props.date}</ItemDate>
                <ItemAmmount ammount={props.ammount}>$ {props.ammount}</ItemAmmount>
            </TransactionInfos>
            <EditButton onClick={handleEdit}>
                <ImPencil 
                    color={'#FFF'}
                    size={22}
                />
            </EditButton>
            <DeleteButton onClick={handleDelete}>
                <IoCloseCircle 
                    color={'#FFF'}
                    size={32}
                />
            </DeleteButton>
        </Container>
        )
}

export default TransactionItem;
