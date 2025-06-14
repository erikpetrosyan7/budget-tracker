import { BudgetProvider } from './context/BudgetContext';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import BalanceDisplay from './components/BalanceDisplay';

const App = () => {
	return (
		<BudgetProvider>
			<div className='container'>
				<h1> Budget Tracker</h1>
				<BalanceDisplay />
				<AddTransaction />
				<TransactionList />
			</div>
		</BudgetProvider>
	);
};

export default App;
