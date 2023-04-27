import React, { useState } from "react";
import styles from "./Expense.module.css";
import ExpensesFilter from "./ExpensesFilter.jsx";

const Expense = (props) => {
  //state thay đổi title
  const [change, setChange] = useState(false);
  let index;
  const changeTitle = (item) => {
    setChange(!change);
    // console.log(item);
    index = props.data.findIndex((exp) => exp.id === item.id);
    props.data[index].title = "Update!";
    // console.log(index);
  };

  return (
    <div className={styles.expenseBigDiv}>
      <ExpensesFilter />
      {props.data.map((item, i) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.date}>
            <p style={{ fontWeight: "600" }}>{item.date.getMonth()}</p>
            <p>{item.date.getFullYear()}</p>
            <p style={{ fontWeight: "600", fontSize: "1.5rem" }}>
              {item.date.getDate()}
            </p>
          </div>
          <div className={styles.titleandamount}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.amountandbtn}>
              <div className={styles.amount}>${item.amount}</div>
              <button onClick={() => changeTitle(item)}>Change Title</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expense;
