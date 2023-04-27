import { useContext } from "react";
import { ExpenseContext } from "./App.js";

import styles from "./ExpensesFilter.module.css";

const ExpensesFilter = () => {
  const expenses = useContext(ExpenseContext);
  //   console.log(expenses);
  //lọc bỏ những năm trùng trong expenses, để dùng cho <select>
  let yearArr = [];
  const expensesYear = expenses.map((item) => item.date.getFullYear());
  //   console.log(expensesYear);
  yearArr = expensesYear.filter((year) =>
    yearArr.includes(year) ? "" : yearArr.push(year)
  );
  console.log(yearArr);

  return (
    <div className={styles.efilter}>
      <p>Filter by year</p>
      <select>
        {yearArr.map((year) => (
          <option key={Math.random().toString()}>{year}</option>
        ))}
      </select>
    </div>
  );
};

export default ExpensesFilter;
