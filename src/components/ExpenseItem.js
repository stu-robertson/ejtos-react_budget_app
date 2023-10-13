import React, { useContext } from 'react';
import { IconContext } from 'react-icons';
import { TiDelete, TiPlus, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    let circleClasses = "inline-block p-7 rounded-full w-20 mx-auto";
    const { currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }
    return (
                <tr>
                <td>{props.name}</td>
                <td>{currency}{props.cost}</td>
                <IconContext.Provider value={{ color: "white", className: "plus-icon" }}>
                <td><TiPlus size='1.5em'onClick={event=> increaseAllocation(props.name)}></TiPlus></td>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "white", className: "minus-icon" }}>
                <td><TiMinus size='1.5em' onClick={event=> decreaseAllocation(props.name)}>-</TiMinus></td>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "red", className: "global-class-name" }}>
                <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
                </IconContext.Provider>
                </tr>
    );
};
export default ExpenseItem;
