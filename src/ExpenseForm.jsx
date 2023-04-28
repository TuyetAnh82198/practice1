import { useRef, useState, useContext } from "react";

import styles from "./ExpenseForm.module.css";

import { ExpenseContext } from "./App.js";
import Expense from "./Expense.jsx";

const ExpenseForm = () => {
  const expense = useContext(ExpenseContext);

  const [expenses, setExpenses] = useState(expense);
  //state ẩn hiển form
  const [isHide, setIsHide] = useState(true);

  const titleInput = useRef();
  const amountInput = useRef();
  const dateInput = useRef();

  //dữ liệu nhập vào
  let oj;

  const addExpense = () => {
    if (
      titleInput.current.value === "" ||
      amountInput.current.value === "" ||
      dateInput.current.value === ""
    ) {
      alert("Moi nhap thong tin");
    } else {
      oj = {
        id: Math.random().toString(),
        title: titleInput.current.value,
        amount: amountInput.current.value,
        date: dateInput.current.value,
      };
      console.log(oj);
      //dùng if và includes kiểm tra trước khi setExpenses, để tránh setExpenses thực hiện push hai lần khiến mảng bị trùng phần tử không cần thiết
      setExpenses((prevState) => {
        if (!prevState.includes(oj)) {
          prevState.push(oj);
        }
      });
      console.log(expenses);
      titleInput.current.value = "";
      amountInput.current.value = "";
      dateInput.current.value = "";
      setIsHide(true);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={styles.eform}>
          {isHide && (
            <div className={styles.btnadd}>
              <button onClick={() => setIsHide(false)}>Add New Expense</button>
            </div>
          )}
          {!isHide && (
            <div>
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
                <button
                  className={styles.btncancel}
                  onClick={() => setIsHide(true)}
                >
                  Cancel
                </button>
                <button onClick={addExpense}>Add Expense</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Expense data={expenses} />
      </div>
    </div>
  );
};

export default ExpenseForm;
