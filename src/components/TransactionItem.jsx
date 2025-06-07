import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

function TransactionItem({transaction}) {
    const {dispatch} = useContext(BudgetContext)

    function handleDelete(){
        dispatch({ type: 'DELETE_TRANSACTION', newTransaction: transaction.id });
    }

    return (
        <li
            style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
            borderBottom: '1px solid #ccc',
            paddingBottom: '5px',
      }}
        >
        <span>{transaction.description}</span>
        <span>
            {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}
            <button
            onClick={handleDelete}
            style={{ marginLeft: '10px', color: 'red' }}
            >
            x
            </button>
        </span>
        </li>
    )

}
export default TransactionItem