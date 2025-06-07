import { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

function BalanceDisplay(){
    const {transactions} = useContext(BudgetContext)
    
   const income = transactions
    .filter(tx => tx.amount > 0)
    .reduce((acc, tx) => acc + +tx.amount, 0);

  const expense = transactions
    .filter(tx => tx.amount < 0)
    .reduce((acc, tx) => acc + +tx.amount, 0);

  const balance = income + expense;

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Balance: ${balance}</h2>
      <p style={{ color: 'green' }}>Income: +${income}</p>
      <p style={{ color: 'red' }}>Expenses: -${Math.abs(expense)}</p>
    </div>
  )
}
export default BalanceDisplay