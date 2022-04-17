import { useState, createContext } from "react";

const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [isBtnEnabled, setBtnEnabled] = useState(false);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });

  const [budget, setBudget] = useState([
    {
      id: 1,
      charge: "elektrik faturası",
      amount: 50,
    },
    {
      id: 2,
      charge: "su faturası",
      amount: 70,
    },
  ]);

  //const [total] = useState(0);
  const [editMode, setEditMode] = useState({
    item: {},
    edit: false,
  });

  const removeAll = () => {
    if (window.confirm("All items are going to be deleted, sure about this?")) {
      setBudget([]);
      setCharge("");
      setAmount("");
      setEditMode({
        items: {},
        edit: false,
      });
      setBtnEnabled(false);
      handleAlert("success", "All items are deleted");
    }
  };

  const removeItem = (id) => {
    if (window.confirm("Want to delete, sure?")) {
      setBudget(budget.filter((item) => item.id !== id));
      handleAlert("success", "Item has been deleted!");
      setEditMode({
        items: {},
        edit: false,
      });
      setCharge("");
      setAmount("");
      setBtnEnabled(false);
    }
  };

  const handleAlert = (type, text) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 2000);
  };

  const saveBudget = (charge, amount) => {
    setBudget([
      ...budget,
      { id: Math.random(), charge: charge, amount: parseInt(amount) },
    ]);
    handleAlert("success", "budget has been added!");
  };

  const handleEditMode = (id) => {
    const theBudget = budget.find((item) => item.id === id);
    setEditMode({
      item: theBudget,
      edit: true,
    });

    //return theBudget
    //updateBudget(id)
  };

  const updateBudget = (id, updItem) => {
    setBudget(
      budget.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );

    // setFeedback(feedback.map((item) => (item.id === id ? data : item)))
    setEditMode({
      item: {},
      edit: false,
    });

    //return theBudget
  };

  const calculateTotal = () => {
    return budget.reduce(
      (total, currentItem) => (total = total + parseInt(currentItem.amount)),
      0
    );
  };

  return (
    <BudgetContext.Provider
      value={{
        budget,
        setBudget,
        saveBudget,
        calculateTotal,
        removeAll,
        removeItem,
        handleAlert,
        alert,
        setAlert,
        handleEditMode,
        editMode,
        setEditMode,
        updateBudget,
        charge,
        setCharge,
        amount,
        setAmount,
        isBtnEnabled,
        setBtnEnabled,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetContext;
