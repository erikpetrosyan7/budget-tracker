import { createContext, useReducer } from "react";

const initialState = {
  transactions: []
};

function budgetReducer(state, action){
    switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.newTransaction, ...state.transactions]
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(tx => tx.id !== action.newTransaction)
      };
    default:
      return state;
  }
}

export const BudgetContext = createContext();

export function BudgetProvider ({ children }){
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  return (
    <BudgetContext.Provider value={{ transactions: state.transactions, dispatch }}>
      {children}
    </BudgetContext.Provider>
  );
};