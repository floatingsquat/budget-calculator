import './App.css';
import BudgetForm from './components/BudgetForm';
import BudgetList from './components/BudgetList';
import {useContext} from 'react'
import BudgetContext from './context/BudgetContext';
import Alert from './components/Alert';
import plogo from './assets/pr-logo.png'


function App() {

  const {alert, calculateTotal} = useContext(BudgetContext)

  return (
    <div className="container">
     {alert.show && <Alert type={alert.type} text={alert.text} />}
     <div className="card">
     <div>
      
      </div>
    <div className="card-top">
    <img src={plogo} alt="logo" width="60px"/>
    <h2> Budget Calculator</h2>
    </div>
   
      <BudgetForm />
      <BudgetList />

      <div className="total">
      <h5>Total Spending:</h5>
      <span>${calculateTotal()}</span>

      </div>
     </div>
    </div>
  );
}

export default App;
