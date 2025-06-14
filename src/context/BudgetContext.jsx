import { createContext, useReducer } from 'react';

const initialState = {
	transactions: [],
};

function budgetReducer(state, action) {
	switch (action.type) {
		case 'ADD_TRANSACTION':
			return {
				...state,
				transactions: [action.newTransaction, ...state.transactions],
			};
		case 'DELETE_TRANSACTION':
			return {
				...state,
				transactions: state.transactions.filter(
					t => t.id !== action.newTransaction
				),
			};
		default:
			return state;
	}
}

export const TransactionsContext = createContext();
export const DispatchContext = createContext();

export function BudgetProvider({ children }) {
	const [state, dispatch] = useReducer(budgetReducer, initialState);

	return (
		<TransactionsContext.Provider value={state.transactions}>
			<DispatchContext value={dispatch}>{children}</DispatchContext>
		</TransactionsContext.Provider>
	);
}
