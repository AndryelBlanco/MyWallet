import React from 'react';
import { FirebaseContext } from '../../Contexts/FIrebaseContext';
import { ModalBackdrop, ModalItem, ModalTitle, ModalInput, ButtonsContainer, CancelButton, ConfirmButton, ModalForm } from './StyledForm';

const Modal = (props) => {

    const { setNewValues, save, totalBalance, oldValues } = React.useContext(FirebaseContext);
    const [transactionAmmount, setTransactionAmmount] = React.useState('');
    const [transactionTitle, setTransactionTitle] = React.useState('');
    const [transactionDate, setTransactionDate] = React.useState('');
    
    console.log(oldValues);

    React.useEffect(() => {
        if(transactionAmmount < 0){
            setNewValues({newCashIn: 0, newCashOut: transactionAmmount, newHistory: {
                title: transactionTitle,
                ammount: transactionAmmount,
                date: transactionDate,
            }});
        }else{
            setNewValues({newCashIn: transactionAmmount, newCashOut: 0, newHistory: {
                title: transactionTitle,
                ammount: transactionAmmount,
                date: transactionDate,
            }});
        }

    }, [transactionAmmount, transactionTitle, transactionDate]);
    
    function handleChange({target}) {
        switch(target.id){
            case 'title':
                setTransactionTitle(target.value);
                break;
            case 'date':
                setTransactionDate(target.value);
                break;
            case 'ammount':
                if(target.value === ''){
                    setTransactionAmmount('');
                }else{
                    convertValue(target.value);
                }
                break;
            default: break;
        }
       
    }

    function convertValue(value){
        const newValue = parseFloat(value);
        if(newValue){
            console.log("C: ",newValue);
            setTransactionAmmount(newValue);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        save();
        setTransactionAmmount('');
        setTransactionTitle('');
        setTransactionDate('');
        props.onClickFunction();
    }

    return (
        <ModalBackdrop>
            <ModalItem className='fadeInAnimation'>
                <ModalForm onSubmit={handleSubmit} id='form'>
                    <ModalTitle>New Transaction</ModalTitle>

                    <ModalInput
                        type='text'
                        value={transactionTitle}
                        onChange={handleChange}
                        placeholder='title'
                        id='title'
                    />
                    <ModalInput
                       value={transactionAmmount}
                       onChange={handleChange}
                       placeholder='ammount'
                       id='ammount'
                       type='number'
                    />
                    <ModalInput
                        type='date'
                        value={transactionDate}
                        onChange={handleChange}
                        placeholder='date'
                        id='date'
                    />
                </ModalForm>
                <ButtonsContainer>
                    <CancelButton onClick={props.onClickFunction} >Cancel</CancelButton>
                    <ConfirmButton form='form'>Confirm</ConfirmButton>
                </ButtonsContainer>
            </ModalItem>
        </ModalBackdrop>
    )

}

export default Modal;
