import React from 'react';
import { FirebaseContext } from '../../Contexts/FirebaseContext';
import TransactionItem from '../TransactionItem/TransactionItem';
import { ButtonNewTransaction, Header, Text, TransactionHistoryContainer, TransactionsList } from './StyledTransactionContainer';


const TransactionContainer = ({isModalVisible, setIsModalVisible}) => {
  const { oldValues } = React.useContext(FirebaseContext);
  const [hasOldValue, setHasOldValues] = React.useState(false);
  

  React.useEffect(() => {
    if(oldValues !== null) setHasOldValues(true);
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
                      oldValues.oldHistory.map((transaction, index) => {
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
