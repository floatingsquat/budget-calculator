import {useContext} from 'react'
import BudgetContext from '../context/BudgetContext'
import {FaEdit, FaMinusCircle} from 'react-icons/fa'
function BudgetItem({item}) {

    const {removeItem, handleEditMode} = useContext(BudgetContext)
   
  return (
    <div className="item">
        <div className="item-main"><span>{item.charge}</span></div> <div><span className="spn-amount">${item.amount}</span></div>
        <div>
        <span><FaMinusCircle onClick={() => removeItem(item.id)} /> <FaEdit onClick={() => handleEditMode(item.id)} /></span>
          </div>
       
    </div>
  )
}

export default BudgetItem