import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import TransactionItem from "./TransactionItem";

function TransactionList() {
    const {transactions} = useContext(BudgetContext)

    return (
        <div>
            <h3>Transaction History</h3>
            <ul>
                {transactions.map(tx => (
                <TransactionItem key={tx.id} transaction={tx} />
                ))}
            </ul>
        </div>
    )
}

export default TransactionList