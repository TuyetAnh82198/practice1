import React from "react";
import styles from "./Expense.module.css";

const Expense = (props) => {
  return (
    <div className={styles.expenseBigDiv}>
      {props.data.map((item) => (
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
            <div className={styles.amount}>${item.amount}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expense;
