import { useContext } from 'react';
import { TransactionsContext } from '../context/BudgetContext';

function BalanceDisplay() {
	const transactions = useContext(TransactionsContext);

	const income = transactions
		.filter(tx => tx.amount > 0)
		.reduce((acc, tx) => acc + +tx.amount, 0);

	const expense = transactions
		.filter(tx => tx.amount < 0)
		.reduce((acc, tx) => acc + +tx.amount, 0);

	let balance = income + expense;

	return (
		<div>
			<h2>Balance: ${balance}</h2>
			<p className='income-text'>Income: +${income}</p>
			<p className='expense-text'>
				Expenses: -${Math.max(0, Math.abs(expense))}
			</p>
		</div>
	);
}
export default BalanceDisplay;
