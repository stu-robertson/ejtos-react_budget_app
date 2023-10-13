import React, { useContext } from 'react';
import { TiDelete, TiPlusOutline } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
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
                <td><button className="increase-button"onClick={event=> increaseAllocation(props.name)}>+</button></td>
                <td><button className="decrease-button"onClick={event=> decreaseAllocation(props.name)}>-</button></td>
                <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
                </tr>
    );
};
export default ExpenseItem;
