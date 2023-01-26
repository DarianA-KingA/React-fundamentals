import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [Newtitle, SetNewTitle] = useState("");
  const [NewAmount, SetNewAmount] = useState("");
  const [NewDate, SetNewDate] = useState("");
  // const [userInput,setUserInput] = userState({
  //     newTitle:'',
  //     NewAmount:'',
  //     newDate:''
  // });

  const TitleChangeHandler = (event) => {
    SetNewTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     newTitle : event.target.value
    // });
    // setUserInput((prevState)=>{
    //     return {...prevState, newTitle:event.target.value}
    // });
  };
  const AmmountChangeHandler = (event) => {
    SetNewAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     NewAmount:event.target.value
    // });
  };
  const DateChangeHandler = (event) => {
    SetNewDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     newDate:event.target.value
    // });
  };

  const SubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: Newtitle,
      amount: NewAmount,
      date: new Date(NewDate),
    };
    props.onSaveExpenseData(expenseData);
    SetNewTitle('');
    SetNewAmount('');
    SetNewDate('');
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text" 
            value={Newtitle} 
            onChange={TitleChangeHandler} 
            />
        </div>
        <div className="new-expense__control">
          <label>Ammount</label>
          <input
            type="number"
            value={NewAmount}
            min="0.01"
            step="0.01"
            onChange={AmmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={NewDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button className="rounded-xl" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
