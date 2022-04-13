import { useState, useEffect, useContext } from 'react'
import BudgetContext from '../context/BudgetContext'
import { FaSave } from "react-icons/fa";


function BudgetForm() {

const {saveBudget, editMode, updateBudget} = useContext(BudgetContext)

const [charge, setCharge] = useState('')
const [amount, setAmount] = useState('')


   const btnEnabled = charge.length > 0 && amount.length > 0
    


useEffect(()=> {

  
    if(editMode.edit){

        setCharge(editMode.item.charge)
        setAmount(editMode.item.amount)   

    }
   
 
},[editMode])



const onSave = (() => {

    if(charge && amount){

    if(editMode.edit === false){        
        saveBudget(charge,amount)
        setCharge('')
        setAmount('')
    }
    else {


        const changedItem = {
            charge,
            amount
        }
        updateBudget(editMode.item.id, changedItem )
        setCharge('')
        setAmount('')
    }
       
    }
})



const chargeOnChange = ((e)=> {

    setCharge(e.currentTarget.value)
   

})

const amountOnChange = ((e)=> {
    setAmount(e.currentTarget.value)

})




  return (
    <div className="budget-form">
       
       <label htmlFor="charge" >Charge*</label>
       <input value={charge} id="charge" type="text" className="charge" placeholder='e.g. internet bill'  onChange={chargeOnChange} />
       <label htmlFor="amount" >Amount*</label>
       <input value={amount} id="amount" type="text" className="amount"  placeholder='e.g. 70'  onChange={amountOnChange} onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} />
       <button className="btn-primary" disabled={!btnEnabled} onClick={onSave}><FaSave /><span>{editMode.edit ? "Save" : "Add New"}</span></button>
       <br/>
       
    </div>
  )
}

export default BudgetForm