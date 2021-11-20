import React from 'react';
import { Container, ItemAmmount, ItemTitle } from './StyledTransactionItem';

const TransactionItem = (props) => {
    return (
        <Container>
            <ItemTitle>{props.title}</ItemTitle>
            <span>{props.date}</span>
            <ItemAmmount ammount={props.ammount}>$ {props.ammount}</ItemAmmount>
        </Container>
    )
}

export default TransactionItem;
