import { useRef, useState } from "react";

import styles from "./ExpenseForm.module.css";

const ExpenseForm = () => {
  const titleInput = useRef();
  const amountInput = useRef();
  const dateInput = useRef();

  //dữ liệu nhập vào
  let oj;

  const addExpense = () => {
    oj = {
      title: titleInput.current.value,
      amount: amountInput.current.value,
      date: new Date(
        dateInput.current.value.split("-")[0],
        dateInput.current.value.split("-")[1],
        dateInput.current.value.split("-")[2]
      ),
    };
    console.log(oj);
    titleInput.current.value = "";
    amountInput.current.value = "";
    dateInput.current.value = "";
  };

  return (
    <div className={styles.eform}>
      <div className={styles.titleandamount}>
        <div>
          <p>Title</p>
          <input type="text" ref={titleInput} />
        </div>
        <div className={styles.amount}>
          <p>Amount</p>
          <input type="text" ref={amountInput} />
        </div>
      </div>
      <div className={styles.dateandbnt}>
        <div>
          <p>Date</p>
          <input type="date" ref={dateInput} />
        </div>
        <button onClick={addExpense}>Add Expense</button>
      </div>
    </div>
  );
};

export default ExpenseForm;
