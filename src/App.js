import { BudgetProvider } from "./context/BudgetContext";
import Home from "./components/Home";

function App() {
  return (
    <BudgetProvider>
      <Home />
    </BudgetProvider>
  );
}

export default App;
