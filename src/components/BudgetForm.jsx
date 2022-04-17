import { useEffect, useContext } from "react";
import BudgetContext from "../context/BudgetContext";
import { FaSave } from "react-icons/fa";

function BudgetForm() {
  const {
    saveBudget,
    editMode,
    setEditMode,
    updateBudget,
    charge,
    setCharge,
    amount,
    setAmount,
    isBtnEnabled,
    setBtnEnabled,
  } = useContext(BudgetContext);

  //const btnEnabled =

  useEffect(() => {
    if (editMode.edit) {
      setCharge(editMode.item.charge);
      setAmount(editMode.item.amount);
      setBtnEnabled(true);
    }
  }, [editMode]);

  const onSave = () => {
    if (charge && amount) {
      if (editMode.edit === false) {
        saveBudget(charge, amount);
      } else {
        const changedItem = {
          charge,
          amount,
        };
        updateBudget(editMode.item.id, changedItem);
        setEditMode({
          item: {},
          edit: false,
        });
      }
      setBtnEnabled(false);
      setCharge("");
      setAmount("");
    }
  };

  const chargeOnChange = (e) => {
    setCharge(e.currentTarget.value);
    if (amount) {
      setBtnEnabled(true);
    }
  };

  const amountOnChange = (e) => {
    setAmount(e.currentTarget.value);
    if (charge) {
      setBtnEnabled(true);
    }
  };

  return (
    <div className="budget-form">
      <form>
        <label htmlFor="charge">Charge*</label>
        <input
          value={charge}
          id="charge"
          type="text"
          className="charge"
          placeholder="e.g. internet bill"
          onChange={chargeOnChange}
        />
        <label htmlFor="amount">Amount*</label>
        <input
          value={amount}
          id="amount"
          type="text"
          className="amount"
          placeholder="e.g. 70"
          onChange={amountOnChange}
          onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
        />
        <button
          className="btn-primary"
          disabled={!isBtnEnabled}
          onClick={onSave}
        >
          <FaSave />
          <span>{editMode.edit ? "Save" : "Add New"}</span>
        </button>
        <br />
      </form>
    </div>
  );
}

export default BudgetForm;
