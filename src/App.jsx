import { BudgetProvider } from './context/BudgetContext';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import BalanceDisplay from './components/BalanceDisplay';

const App = () => {
  return (
    <BudgetProvider>
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
        <h1>💰 Budget Tracker</h1>
        <BalanceDisplay />
        <AddTransaction />
        <TransactionList />
      </div>
    </BudgetProvider>
  );
};

export default App;
