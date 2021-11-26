import React from 'react';
import { Container, ItemAmmount, ItemDate, ItemTitle } from './StyledTransactionItem';

const TransactionItem = (props) => {
        return (
            <Container>
                <ItemTitle>{props.title}</ItemTitle>
                <ItemDate>{props.date}</ItemDate>
                <ItemAmmount ammount={props.ammount}>$ {props.ammount}</ItemAmmount>
            </Container>
        )
}

export default TransactionItem;
