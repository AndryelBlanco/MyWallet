import React from 'react';
import { FirebaseContext } from '../../Contexts/FIrebaseContext';
import { Card, CardData, CardTitle, StrongText } from './StyledInfoCard';

const InfoCard = ({title, type}) => {
    const { oldValues } = React.useContext(FirebaseContext);

    const [balance, setBalance] = React.useState(0);
    let formated = 0;

    React.useEffect(() =>{
        setBalance((oldValues.oldCashIn + oldValues.oldCashOut).toLocaleString('pt-br', {minimumFractionDigits: 2}));
    }, [oldValues])

   


    return (
        <Card title={title}>
            <CardTitle title={title}>{title}</CardTitle>
            <CardData ammount={balance} title={title}><StrongText>$</StrongText> {balance}</CardData>
        </Card>
    )
}

export default InfoCard
