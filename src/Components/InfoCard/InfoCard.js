import React from 'react';
import { Card, CardData, CardTitle, StrongText } from './StyledInfoCard';
import { IoCaretDown, IoCaretUp } from "react-icons/io5";

const InfoCard = (props) => {
    return (
        <Card>
            <CardTitle>{props.title}</CardTitle>
            {props.title === 'Balance' ?
                <CardData ammount={props.ammount}><StrongText>$</StrongText> {props.ammount}</CardData>
                :
                <CardData ammount={0}><StrongText>$</StrongText> {props.ammount} {props.type === 'in' ? <IoCaretUp color='#42DB29' size={35} /> : null} {props.type === 'out' ? <IoCaretDown color='#FF3333' size={35} /> : null}</CardData>
            }

        </Card>
    )
}

export default InfoCard
