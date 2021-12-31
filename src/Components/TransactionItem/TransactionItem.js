import React from 'react';
import { ButtonsContainer, Container, DataContainer, DeleteButton, Divider, EditButton, InfoContainer, ItemAmmount, ItemDate, ItemTitle, TransactionInfos } from './StyledTransactionItem';
import { FirebaseContext } from '../../Contexts/FIrebaseContext';
import { ImPencil } from "react-icons/im";
import { IoCloseCircle } from "react-icons/io5";
import TypeIcons from '../TypeIcon/TypeIcons';

const TransactionItem = (props) => {
    const { setObjEdit, setIsDeleteModalVisible, setIsEditModalVisible } = React.useContext(FirebaseContext);

    function handleEdit() {
        setObjEdit({
            title: props.title,
            ammount: props.ammount,
            index: props.index,
            type: props.type,
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
            <DataContainer>
                <TransactionInfos>
                    <TypeIcons type={props.type} />
                    <InfoContainer>
                        <ItemTitle>{props.title}</ItemTitle>
                        <ItemDate>{props.date}</ItemDate>
                    </InfoContainer>
                </TransactionInfos>
                <ItemAmmount ammount={props.ammount}>$ {props.ammount}</ItemAmmount>
            </DataContainer>
                <ButtonsContainer>
                <Divider/>
                <EditButton onClick={handleEdit}>
                    <ImPencil 
                        color={'#FFF'}
                        size={22}
                    />
                </EditButton>
                <DeleteButton onClick={handleDelete}>
                    <IoCloseCircle 
                        color={'#FF4040'}
                        size={32}
                    />
                </DeleteButton>
            </ButtonsContainer>
        </Container>
        )
}

export default TransactionItem;
