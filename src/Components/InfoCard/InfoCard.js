import React from 'react';
import { Card, CardData, CardTitle, StrongText } from './StyledInfoCard';
import { IoCaretDown, IoCaretUp } from "react-icons/io5";

const InfoCard = ({title, ammount, type}) => {
    return (
        <Card title={title}>
            <CardTitle title={title}>{title}</CardTitle>
            {title === 'Balance' ?
                <CardData ammount={ammount} title={title}><StrongText>$</StrongText> {ammount}</CardData>
                :
                <CardData ammount={0} title={title}><StrongText>$</StrongText> {ammount} {type === 'in' ? <IoCaretUp color='#42DB29' size={35} /> : null} {type === 'out' ? <IoCaretDown color='#FF3333' size={35} /> : null}</CardData>
            }

        </Card>
    )
}

export default InfoCard
