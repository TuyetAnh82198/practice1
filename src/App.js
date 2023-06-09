import React, { createContext } from "react";

import styles from "./App.module.css";
import Expense from "./Expense.jsx";
import ExpenseForm from "./ExpenseForm.jsx";

export const ExpenseContext = createContext();

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: "2020-7-14",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: "2021-2-12",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: "2021-2-28",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: "2021-5-12",
    },
  ];

  return (
    <ExpenseContext.Provider value={expenses}>
      <ExpenseForm />
    </ExpenseContext.Provider>
  );
}

export default App;
