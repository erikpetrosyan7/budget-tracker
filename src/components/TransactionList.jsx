import { useContext, useState } from 'react';
import { TransactionsContext } from '../context/BudgetContext';
import TransactionItem from './TransactionItem';

const TransactionList = () => {
	const transactions = useContext(TransactionsContext);
	const [filter, setFilter] = useState('all');

	const filteredTransactions = transactions.filter(t => {
		if (filter === 'all') return true;
		if (filter === 'income') return t.amount > 0;
		if (filter === 'expense') return t.amount < 0;
		return true;
	});

	return (
		<div>
			<h3>Transaction History</h3>

			<select value={filter} onChange={e => setFilter(e.target.value)}>
				<option value='all'>All</option>
				<option value='income'>Only Income</option>
				<option value='expense'>Only Expenses</option>
			</select>

			<ul>
				{filteredTransactions.length === 0 && <p>No transactions found</p>}
				{filteredTransactions.map(t => (
					<TransactionItem key={t.id} transaction={t} />
				))}
			</ul>
		</div>
	);
};

export default TransactionList;
