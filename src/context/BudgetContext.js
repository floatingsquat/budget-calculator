import {useState, createContext} from 'react'


const BudgetContext = createContext()

export const BudgetProvider = ({children}) => {


const [alert, setAlert] = useState({ show: false });



const [budget, setBudget] = useState([
    {
        id: 1,
        charge: 'elektrik faturası',
        amount: 50
    },
    {
        id: 2,
        charge: 'su faturası',
        amount: 70
    },
])



const [total] = useState(0)
const [editMode, setEditMode] = useState({
    item: {},
    edit: false
})



const removeAll = (() => {
    if(budget.length > 0){
        if(window.confirm("All items are going to be deleted, sure about this?"))
        {
            handleAlert("success", "All items are deleted")
        }
        setBudget([])
    }
    else{
        handleAlert("danger", "Nothing found to delete.")

    }
   
    
})

const removeItem = ((id) => {
    if(window.confirm("Want to delete, sure?")){
        setBudget(budget.filter((item) => item.id !== id))
        handleAlert("success", "Item has been deleted!")
    }
})

const handleAlert = ((type, text) => {
    setAlert({show: true, type, text});
    setTimeout(() => {
        setAlert({show:false});
    },2000)
})



const saveBudget = ((charge, amount) => {
    if(budget){
        setBudget([...budget, {id: Math.random(), charge: charge, amount:parseInt(amount)}])
        //setTotal(...total, amount)
        handleAlert("success", "budget has been added!")
    }
    else {
        setBudget([{id: Math.random(), charge: charge, amount:parseInt(amount)}])
        //setTotal(...total, amount)
        handleAlert("success", "budget has been added!")
    }
})

const handleEditMode = ((id) => {

    const theBudget = budget.find((item) => item.id === id )
    setEditMode({
        item: theBudget,
        edit: true
    })
    



    //return theBudget
    //updateBudget(id)
})

const updateBudget = ((id, updItem) => {
    
    console.log("edit mod aktif")

    
    setBudget(budget.map((item)=> (item.id === id ? {...item, ...updItem} : item)))

   // setFeedback(feedback.map((item) => (item.id === id ? data : item)))
    setEditMode({
        item: {},
        edit: false
    })

    console.log(budget)
    //return theBudget
    
})

const calculateTotal = (() => {
    return (budget.reduce((total,currentItem) =>  total = total + parseInt(currentItem.amount) , 0 ))
})

return  (
    <BudgetContext.Provider value={
        {budget, 
        setBudget, 
        total, 
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
        
        }}>
        {children}
    </BudgetContext.Provider>
)

}

export default BudgetContext