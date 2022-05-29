import ExpenseItems from "./components/Expenses/ExpenseItems";
import NewExpense from "./components/NewExpenses/NewExpense";
import React, { useState } from "react";


  const sampleExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

const App = () => {

   const [enteredExpense, setEnteredExpense] = useState(sampleExpenses);


  const addExpenseHandler = (expense) => {
    setEnteredExpense(prevExpenses => {
      //we get expense's values, then we add our prev expenses in. using spread ...
      return [expense, ...prevExpenses];
    });
  };

  /* jsx code */
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItems items={enteredExpense} />
    </div>
  );

  // return <ExpenseItems items={expenses} />;
};

export default App;
