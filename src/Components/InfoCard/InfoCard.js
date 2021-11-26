import React from 'react';
import { Card, CardData, CardTitle, StrongText } from './StyledInfoCard';
import { IoCaretDown, IoCaretUp } from "react-icons/io5";

const InfoCard = ({title, ammount, type}) => {
    return (
        <Card>
            <CardTitle>{title}</CardTitle>
            {title === 'Balance' ?
                <CardData ammount={ammount}><StrongText>$</StrongText> {ammount}</CardData>
                :
                <CardData ammount={0}><StrongText>$</StrongText> {ammount} {type === 'in' ? <IoCaretUp color='#42DB29' size={35} /> : null} {type === 'out' ? <IoCaretDown color='#FF3333' size={35} /> : null}</CardData>
            }

        </Card>
    )
}

export default InfoCard
