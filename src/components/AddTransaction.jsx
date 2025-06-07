import { useState, useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export default function AddTransaction(){
    const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const { dispatch } = useContext(BudgetContext);

  const handleSubmit = (e) => {
    e.preventDefault();


    const newTransaction = {
      id: Date.now(),
      description,
      amount: amount
    };

    dispatch({ type: 'ADD_TRANSACTION', newTransaction: newTransaction });
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h3>Add Transaction</h3>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Amount "
        value={amount}
        onChange={e => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
    )
}