import React from 'react';
import { FirebaseContext } from '../../Contexts/FirebaseContext';
import { Card, CardData, CardTitle, StrongText } from './StyledInfoCard';

const InfoCard = ({title, type}) => {
    const { oldValues } = React.useContext(FirebaseContext);

    const [balance, setBalance] = React.useState(0);

    React.useEffect(() =>{
        setBalance(oldValues.oldCashIn + oldValues.oldCashOut);
    }, [oldValues])

    


    return (
        <Card title={title}>
            <CardTitle title={title}>{title}</CardTitle>
            <CardData ammount={balance.toFixed(2)} title={title}><StrongText>$</StrongText> {balance.toFixed(2)}</CardData>
        </Card>
    )
}

export default InfoCard
