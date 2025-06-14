import { useState, useContext } from 'react';
import { DispatchContext } from '../context/BudgetContext';

export default function AddTransaction() {
	const [description, setDescription] = useState('');
	const [amount, setAmount] = useState('');
	const dispatch = useContext(DispatchContext);

	const handleSubmit = e => {
		e.preventDefault();

		const newTransaction = {
			id: Date.now(),
			description,
			amount,
		};

		dispatch({ type: 'ADD_TRANSACTION', payload: newTransaction });
		setDescription('');
		setAmount('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3>Add Transaction</h3>
			<input
				type='text'
				placeholder='Description'
				value={description}
				onChange={e => setDescription(e.target.value)}
				required
			/>
			<input
				type='number'
				placeholder='Amount '
				value={amount}
				onKeyDown={e => {
					if (['e', 'E'].includes(e.key)) {
						e.preventDefault();
					}
				}}
				onChange={e => setAmount(e.target.value)}
				required
			/>
			<button type='submit'>Add</button>
		</form>
	);
}
