import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {      
        const newCurrency = event.target.value;
        setNewCurrency(newCurrency);
        dispatch({ 
            type:'CHG_CURRENCY', 
            payload: newCurrency,
       });
    }


    return (
<div className='custom-dropdown'>
<span>Currency: {currency}</span>
<select id="currency" value={currency} onChange={handleCurrencyChange}>
    <option value="$">$ Dollar</option>
    <option value="£">£ Pound</option>
    <option value="€">€ Euro</option>
    <option value="₹">₹ Ruppee</option>
</select>

</div>
    );
};
export default Currency;