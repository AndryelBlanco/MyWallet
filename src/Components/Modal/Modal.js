import React from 'react';
import { FirebaseContext } from '../../Contexts/FIrebaseContext';
import { TypeArray } from '../../Helper/TransactionType';
import { ModalBackdrop, ModalItem, ModalTitle, ModalInput, ButtonsContainer, CancelButton, ConfirmButton, ModalForm, ErrorMessage, ModalSelect, AuxMessage } from './StyledForm';

const Modal = (props) => {

    const { setNewValues, objEdit, save, getFirebaseItem } = React.useContext(FirebaseContext);
    const [transactionAmmount, setTransactionAmmount] = React.useState('');
    const [transactionTitle, setTransactionTitle] = React.useState('');
    const [transactionDate, setTransactionDate] = React.useState('');
    const [transactionType, setTransactionType] = React.useState('');

    const [ammountToEdit, setAmmountToEdit] = React.useState('');
    const [titleToEdit, setTitleToEdit] = React.useState('');
    const [dateToEdit, setDateToEdit] = React.useState('');
    const [typeToEdit, setTypeToEdit] = React.useState('');
    const [valuesToEdit, setValuesToEdit] = React.useState(null);

    const [isValid, setIsValid] = React.useState(true);
    const [isFocused, setIsFocused] = React.useState(false);

    React.useEffect(() => {
        if(objEdit !== null){
            setAmmountToEdit(objEdit.ammount);
            setTitleToEdit(objEdit.title);
            setTypeToEdit(objEdit.type);
        }
    }, [objEdit]);

    React.useEffect(() => {
        if(transactionAmmount < 0){
            setNewValues({ newHistory: {
                title: transactionTitle,
                ammount: transactionAmmount,
                date: transactionDate,
                type: transactionType
            }});
        }else{
            setNewValues({ newHistory: {
                title: transactionTitle,
                ammount: transactionAmmount,
                date: transactionDate,
                type: transactionType
            }});
        }

    }, [transactionAmmount, transactionTitle, transactionDate, transactionType]);

    React.useEffect(() => {
        setValuesToEdit({ editedValues: {
                title: titleToEdit,
                ammount: ammountToEdit,
                date: dateToEdit,
                type: typeToEdit
            }});

    }, [ammountToEdit, titleToEdit, dateToEdit]);
    
    function handleChange({target}) {
        switch(target.id){
            case 'title':
                setTransactionTitle(target.value);
                break;
            case 'date':
                if(isValid){
                    setTransactionDate(target.value);
                }else{
                    if(verifyDate(target.value)){
                        setIsValid(true);
                        setTransactionDate(target.value);
                    }
                }
                break;
            case 'ammount':
                if(target.value === ''){
                    setTransactionAmmount('');
                }else{
                    convertValue(target.value);
                }
                break;
            case 'type':
                setTransactionType(target.value);
                break;
            default: break;
        }
    }

    function verifyDate(date) {
        const currentDate = new Date();
        const transactionDate = new Date(date);

        if(transactionDate <= currentDate){
            return true;
        }else{
            return false;
        }
    }

    function handleEdit({target}) {
        switch(target.id){
            case 'title':
                setTitleToEdit(target.value);
                break;
            case 'date':
                if(isValid){
                    setDateToEdit(target.value);
                }else{
                    if(verifyDate(target.value)){
                        setIsValid(true);
                        setDateToEdit(target.value);
                    }
                }
                break;
            case 'ammount':
                if(target.value === ''){
                    setAmmountToEdit('');
                }else{
                    editConvertValue(target.value);
                }
                break;
            case 'type':
                setTypeToEdit(target.value);
                break;
            default: break;
        }
    }

    function convertValue(value){
        const newValue = parseFloat(value);
        if(newValue){
            setTransactionAmmount(newValue);
        }
    }

    function editConvertValue(value){
        const newValue = parseFloat(value);
        if(newValue){
            setAmmountToEdit(newValue);
        }
    }

    function handleEditSubmit(e) {
        e.preventDefault();        
        const dateIsValid = verifyDate(valuesToEdit.editedValues.date);
        if(dateIsValid){
            setIsValid(true);
            const {editedValues} = valuesToEdit;
            getFirebaseItem(props.index, editedValues.title, editedValues.ammount, editedValues.date, editedValues.type);
            props.onClickFunction();
        }else{
            setIsValid(false);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const dateIsValid = verifyDate(transactionDate);
        if(dateIsValid){
            setIsValid(true);
            save();
            setTransactionAmmount('');
            setTransactionTitle('');
            setTransactionDate('');
            setTransactionType('');
            props.onClickFunction();
        }else{
            setIsValid(false);
        }
        
    }

    if(props.type === 'New Transaction'){
        return (
            <ModalBackdrop >
                <ModalItem className='fadeInAnimation'>
                    <ModalForm onSubmit={handleSubmit} id='form'>
                        <ModalTitle>New Transaction </ModalTitle>
                        <ModalInput
                            type='text'
                            value={transactionTitle}
                            onChange={handleChange}
                            placeholder='Transaction Title'
                            id='title'
                            isValid={true}
                            maxLength={26}
                        />
                        {isFocused ? <AuxMessage>Use hyphen for negative values</AuxMessage> : null}
                        <ModalInput
                            value={transactionAmmount}
                            onChange={handleChange}
                            placeholder='Total Ammount'
                            id='ammount'
                            type='number'
                            isValid={true}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        />
                        <ModalInput
                            type='date'
                            value={transactionDate}
                            onChange={handleChange}
                            placeholder='date'
                            style={isValid ? null : {borderColor: 'red'}}
                            id='date'
                            isValid={isValid}
                        />
                        {!isValid ? <ErrorMessage>Please select a valid date</ErrorMessage> : null}
                        <ModalSelect
                            value={transactionType}
                            onChange={handleChange}
                            id='type'
                            isValid={true}
                        >   
                            <option value="" >Select the transaction type</option>
                            {TypeArray.map((e, index) => (
                                <option value={e} key={index}>{e}</option>
                            ))}
                        </ModalSelect>
                    </ModalForm>
                    <ButtonsContainer>
                        <CancelButton onClick={props.onClickFunction} >Cancel</CancelButton>
                        <ConfirmButton form='form'>Confirm</ConfirmButton>
                    </ButtonsContainer>
                </ModalItem>
            </ModalBackdrop>
        )
    }else{
        return (
            <ModalBackdrop>
                <ModalItem className='fadeInAnimation'>
                    <ModalForm onSubmit={handleEditSubmit} id='form-edit'>
                        <ModalTitle>Edit Transaction</ModalTitle>
                        <ModalInput
                            type='text'
                            value={titleToEdit}
                            onChange={handleEdit}
                            placeholder='title'
                            id='title'
                            isValid={true}
                            maxLength={26}
                        />
                        <ModalInput
                           value={ammountToEdit}
                           onChange={handleEdit}
                           placeholder='ammount'
                           id='ammount'
                           type='number'
                           isValid={true}
                        />
                        <ModalInput
                            type='date'
                            value={dateToEdit}
                            onChange={handleEdit}
                            placeholder='date'
                            id='date'
                            isValid={isValid}
                        />
                        {!isValid ? <ErrorMessage>Please select a valid date</ErrorMessage> : null}
                        <ModalSelect
                            value={typeToEdit}
                            onChange={handleEdit}
                            id='type'
                            isValid={true}
                        >   
                            <option value="" >Select the transaction type</option>
                            {TypeArray.map((e, index) => (
                                <option value={e} key={index}>{e}</option>
                            ))}
                        </ModalSelect>
                    </ModalForm>
                    <ButtonsContainer>
                        <CancelButton onClick={props.onClickFunction}>Cancel</CancelButton>
                        <ConfirmButton form='form-edit'>Confirm</ConfirmButton>
                    </ButtonsContainer>
                </ModalItem>
            </ModalBackdrop>
        )
    }


}

export default Modal;
