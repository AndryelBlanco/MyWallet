import React from 'react';
import { FirebaseContext } from '../../Contexts/FIrebaseContext';
import TransactionItem from '../TransactionItem/TransactionItem';
import { ButtonNewTransaction, Header, Text, TransactionHistoryContainer, TransactionsList } from './StyledTransactionContainer';


const TransactionContainer = ({isModalVisible, setIsModalVisible}) => {
  const { oldValues } = React.useContext(FirebaseContext);
  const [hasOldValue, setHasOldValues] = React.useState(false);
  const [valuesArray, setValuesArray] = React.useState(null);

  React.useEffect(() => {
    if(oldValues !== null){
      setHasOldValues(true);
      const reverseArr = oldValues.oldHistory;
      reverseArr.reverse();
      setValuesArray(reverseArr);
    }
  }, [oldValues])

    return (
        <TransactionHistoryContainer>
          <Header>
              <Text>
                  History
              </Text>
              <ButtonNewTransaction onClick={() => setIsModalVisible(!isModalVisible)}>+ New Transaction</ButtonNewTransaction>
          </Header>
          <TransactionsList>
              {hasOldValue ?
                  <>
                    {
                      valuesArray.map((transaction, index) => {
                        return (
                            <TransactionItem key={index} title={transaction.title} type={transaction.type} ammount={transaction.ammount} index={index} date={transaction.date}/>
                        );
                      })
                    }
                  </>
                  :
                  null 
              }
          </TransactionsList>
        </TransactionHistoryContainer>
    )
}

export default TransactionContainer
