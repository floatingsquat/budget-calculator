import { useContext } from "react";
import BudgetContext from "../context/BudgetContext";
import BudgetItem from "./BudgetItem";
import { FaBullseye } from "react-icons/fa";

function BudgetList() {
  const { budget, removeAll } = useContext(BudgetContext);

  return (
    <div className="list">
      {budget.length > 0 && (
        <>
          {budget.map((item, key) => (
            <BudgetItem key={key} item={item} />
          ))}
          <button
            className={!budget ? "btn-hidden" : "btn-primary"}
            onClick={removeAll}
          >
            <FaBullseye />
            <span>Remove All</span>
          </button>
        </>
      )}
    </div>
  );
}

export default BudgetList;
