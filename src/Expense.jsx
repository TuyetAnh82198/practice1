import React, { useState } from "react";

import styles from "./Expense.module.css";
import ExpensesFilter from "./ExpensesFilter.jsx";
import Foundno from "./Foundno.jsx";

const Expense = (props) => {
  //state dữ liệu tổng, để tránh lỗi khi dùng props.data.filter
  const [data, setData] = useState(props.data);
  //state dữ liệu hiển thị sau khi lọc
  const [renderArr, setRenderArr] = useState(props.data);
  //state thay đổi title
  const [change, setChange] = useState(false);

  //state ẩn hiện "Found no expenses" dựa vào độ dài của renderArr
  const [isFound, setIsFound] = useState(true);

  //hiển thị danh sách dựa theo bộ lọc năm
  const filterByYear = (e) => {
    // console.log(e.target.value);
    const filteredArr = data.filter(
      (item) => new Date(item.date).getFullYear() == e.target.value
    );
    if (filteredArr.length === 0) {
      setIsFound(false);
    } else if (filteredArr.length > 0) {
      setRenderArr(filteredArr);
      setIsFound(true);
    }
  };

  let index;
  const changeTitle = (item) => {
    setChange(!change);
    // console.log(item);
    index = data.findIndex((exp) => exp.id === item.id);
    data[index].title = "Update!";
    // console.log(index);
  };

  // console.log(renderArr);

  return (
    <div className={styles.expenseBigDiv}>
      {/* truyền hàm filterByYear cho component, để lấy e.target.value khi click chọn <select> */}
      <ExpensesFilter filterFn={filterByYear} />
      {!isFound && <Foundno />}
      {isFound &&
        renderArr.map((item, i) => (
          <div className={styles.item} key={item.id}>
            <div className={styles.date}>
              <p style={{ fontWeight: "600" }}>
                {new Date(item.date.replace("-", ",")).toLocaleString("en-US", {
                  month: "long",
                })}
              </p>
              <p>{new Date(item.date.replace("-", ",")).getFullYear()}</p>
              <p style={{ fontWeight: "600", fontSize: "1.5rem" }}>
                {new Date(item.date.replace("-", ",")).getDate()}
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
