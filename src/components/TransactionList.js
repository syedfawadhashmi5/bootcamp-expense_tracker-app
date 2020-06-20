import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalContext';

export const TransactionList = () => {
  const { transaction } = useContext(GlobalContext);

  
    return (
        <div>
                  <h3>History</h3>
      <ul className="list">
        {transaction.map(transaction => (<Transaction key={transaction.id} transaction = 
        {transaction} />))}

      </ul>
        </div>
    )
}

