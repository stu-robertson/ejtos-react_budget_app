import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const [isActive, setIsActive] = useState(false);
    const [selected, setIsSelected] = useState("Choose one");
    const { currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    let newCurrencyValue = currency;
    const handleCurrencyChange = (newCurrencyValue) => {    
        dispatch({ 
            type:'CHG_CURRENCY', 
            payload: newCurrencyValue,
       });
    };
    function handleBlur(e) {
      console.log(e);
    }
    return (
    // <div className = "alert">
        <div className="dropdown">
          <div
            onClick={(e) => {
              setIsActive(!isActive);
            }}
            className="dropdown-btn"
          >
            Currency ({selected}) ▼
            <span
              className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
            />
          </div>
          <div
            className="dropdown-content"
            style={{ display: isActive ? "block" : "none" }}
          >
            <div
              onClick={(e) => {
                setIsSelected(e.target.textContent);
                setIsActive(!isActive);
                setNewCurrency(e.target.textContent[0]);
                newCurrencyValue = (e.target.textContent[0]);
                handleCurrencyChange(newCurrencyValue);
              }}
              className="item"
            >
              $ Dollar
            </div>
            <div
              className="item"
              onClick={(e) => {
                setIsSelected(e.target.textContent);
                setIsActive(!isActive);
                setNewCurrency(e.target.textContent[0]);
                newCurrencyValue = (e.target.textContent[0]);
                handleCurrencyChange(newCurrencyValue);
              }}
            >
              £ Pound
            </div>
            <div
              className="item"
              onClick={(e) => {
                setIsSelected(e.target.textContent);
                setIsActive(!isActive);
                setNewCurrency(e.target.textContent[0]);
                newCurrencyValue = (e.target.textContent[0]);
                handleCurrencyChange(newCurrencyValue);
              }}
            >
              € Euro
            </div>
            <div
              className="item"
              onClick={(e) => {
                setIsSelected(e.target.textContent);
                setIsActive(!isActive);
                setNewCurrency(e.target.textContent[0]);
                newCurrencyValue = (e.target.textContent[0]);
                handleCurrencyChange(newCurrencyValue);
              }}
            >
              ₹ Ruppee
            </div>
          </div>
        </div>
        
    //</div>
    );
   
};
export default Currency;