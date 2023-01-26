import React from 'react'
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Seguro",
      amount: 294.67,
      date: new Date(2022, 10, 21),
    },
    {
      id: "e2",
      title: "Luz",
      amount: 124.43,
      date: new Date(2022, 11, 21),
    },
    {
      id: "e3",
      title: "Agua",
      amount: 523.45,
      date: new Date(2022, 9, 21),
    },
    {
      id: "e4",
      title: "Comida",
      amount: 300.1,
      date: new Date(2022, 6, 21),
    },
  ];
  const addExpenseHandler = (expense) =>{
    console.log('In App.js');
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses items={expenses} />
    </div> 
  );
}

export default App;
