import React from 'react'
import './NewExpense.css';
import ExpenseForm from './ExpernseForm';
const NewExpense= (props)=>{
    const SaveExpenseDateHandler = (IngresedExpenseData) =>{
        const expenseData = {
            ...IngresedExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return(
        <div className="new-expense">
           <ExpenseForm onSaveExpenseData={SaveExpenseDateHandler} /> 
        </div>
    );

};

export default NewExpense;