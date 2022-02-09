import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        }
        props.onAddExpense(expenseData);
        setIsEditing(false)
    }

    const stopEditingHandler = () =>{
        setIsEditing(false)
    }

    const startEditingHandler = () =>{
        setIsEditing(true)
    }

    return (
    <div className='new-expense'>
        {!isEditing && (
            <button onClick={startEditingHandler}>Add New Expense</button>
        )}
        {isEditing && (
            <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
            />
        )}
        {/* {isEditing ? 
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
         : <button onClick={startEditingHandler}>Add Expense</button>} */}
        </div>
    );
};

export default NewExpense;