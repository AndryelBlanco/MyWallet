import React from 'react';
import { CardAlt, CardAltData, CardAltTitle, StrongText } from './StyledInfoCard';


const DetailsCard = ({ type, title, ammount }) => {
    return (
        <CardAlt title={title} type={type}>
            <CardAltTitle title={title}>{title}</CardAltTitle>
            <CardAltData ammount={ammount} title={title}><StrongText>$</StrongText> {ammount}</CardAltData>
        </CardAlt>
    )
}

export default DetailsCard
