import { useContext } from 'react';
import { DispatchContext } from '../context/BudgetContext';

function TransactionItem({ transaction }) {
	const dispatch = useContext(DispatchContext);

	function handleDelete() {
		dispatch({ type: 'DELETE_TRANSACTION', newTransaction: transaction.id });
	}

	return (
		<li className='transaction-item'>
			<span>{transaction.description}</span>
			<span>
				{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}
				<button onClick={handleDelete} className='handle-delete'>
					x
				</button>
			</span>
		</li>
	);
}
export default TransactionItem;
