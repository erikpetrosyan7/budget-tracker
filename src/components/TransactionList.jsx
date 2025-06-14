import { useContext } from 'react';
import { TransactionsContext } from '../context/BudgetContext';
import TransactionItem from './TransactionItem';

function TransactionList() {
	const transactions = useContext(TransactionsContext);

	return (
		<div>
			<h3>Transaction History</h3>
			<ul>
				{transactions.map(t => (
					<TransactionItem key={t.id} transaction={t} />
				))}
			</ul>
		</div>
	);
}

export default TransactionList;
