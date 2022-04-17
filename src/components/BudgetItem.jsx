import { useContext } from "react";
import BudgetContext from "../context/BudgetContext";
import { FaEdit, FaMinusCircle } from "react-icons/fa";
function BudgetItem({ item }) {
  const { removeItem, handleEditMode } = useContext(BudgetContext);

  const btnStyle = {
    backgroundColor: "transparent",
    border: "0",
  };
  return (
    <div className="item">
      <div className="item-main">
        <span>{item.charge}</span>
      </div>
      <div>
        <span className="spn-amount">${item.amount}</span>
      </div>
      <div>
        <span>
          <button style={btnStyle} onClick={() => removeItem(item.id)}>
            <FaMinusCircle />
          </button>
          <button style={btnStyle} onClick={() => handleEditMode(item.id)}>
            <FaEdit />
          </button>
        </span>
      </div>
    </div>
  );
}

export default BudgetItem;
