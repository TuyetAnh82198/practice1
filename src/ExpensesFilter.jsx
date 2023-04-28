import { useContext, useState } from "react";
import { ExpenseContext } from "./App.js";

import styles from "./ExpensesFilter.module.css";

const ExpensesFilter = (props) => {
  const expenses = useContext(ExpenseContext);

  console.log(expenses);
  //   console.log(expenses);
  //lọc bỏ những năm trùng trong expenses, để dùng cho <select>
  let yearArr = [];
  const expensesYear = expenses.map((item) =>
    new Date(item.date.replace("-", ",")).getFullYear()
  );
  //   console.log(expensesYear);
  yearArr = expensesYear.filter((year) =>
    yearArr.includes(year) ? "" : yearArr.push(year)
  );
  console.log(yearArr);

  return (
    <div className={styles.efilter}>
      <p>Filter by year</p>
      <select onClick={props.filterFn}>
        <option value="2019">2019</option>
        {yearArr.map((year) => (
          <option value={`${year}`}>{year}</option>
        ))}
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
