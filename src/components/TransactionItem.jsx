import { useContext } from 'react';
import { DispatchContext } from '../context/BudgetContext';

function TransactionItem({ transaction }) {
	const dispatch = useContext(DispatchContext);

	function handleDelete() {
		dispatch({ type: 'DELETE_TRANSACTION', payload: transaction.id });
	}

	let colorClass;
	if (transaction.amount < 0) {
		colorClass = 'expense-text';
	} else {
		colorClass = 'income-text';
	}
	return (
		<li className='transaction-item'>
			<span>{transaction.description}</span>
			<span>
				<span className={colorClass}>
					{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}
				</span>

				<button onClick={handleDelete} className='handle-delete'>
					x
				</button>
			</span>
		</li>
	);
}
export default TransactionItem;
