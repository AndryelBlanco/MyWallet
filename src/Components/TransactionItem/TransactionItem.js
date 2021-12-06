import React from 'react';
import { Container, DeleteButton, EditButton, ItemAmmount, ItemDate, ItemTitle, TransactionInfos } from './StyledTransactionItem';
import { ImPencil } from "react-icons/im";
import { IoCloseCircle } from "react-icons/io5";
import Modal from '../Modal/Modal';
import DeleteModal from '../../Components/Modal/DeleteModal';

const TransactionItem = (props) => {
    const [isEditModalVisible, setIsEditModalVisible] = React.useState(false); 
    const [isDeleteModalVisible, setIsDeleteModalVisible] = React.useState(false); 

    return (
        <Container>
            {isDeleteModalVisible ? <DeleteModal title={props.title} index={props.index} onClickFunction={() => setIsDeleteModalVisible(false)}/> : null}
            {isEditModalVisible ? <Modal type={'Edit Transaction'} index={props.index} oldTitle={props.title} oldAmmount={props.ammount} oldDate={props.date} onClickFunction={() => setIsEditModalVisible(!isEditModalVisible)}/> : null}
            <TransactionInfos>
                <ItemTitle>{props.title}</ItemTitle>
                <ItemDate>{props.date}</ItemDate>
                <ItemAmmount ammount={props.ammount}>$ {props.ammount}</ItemAmmount>
            </TransactionInfos>
            <EditButton onClick={() => setIsEditModalVisible(!isEditModalVisible)}>
                <ImPencil 
                    color={'#FFF'}
                    size={22}
                />
            </EditButton>
            <DeleteButton onClick={() => setIsDeleteModalVisible(true)}>
                <IoCloseCircle 
                    color={'#FFF'}
                    size={32}
                />
            </DeleteButton>
        </Container>
        )
}

export default TransactionItem;
