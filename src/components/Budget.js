import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {    
        const newBudgetValue = event.target.value;
        setNewBudget(newBudgetValue);
        dispatch({ 
            type:'SET_BUDGET', 
            payload: newBudgetValue,
       });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: { currency }</span>
<input className='budget-input' type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;