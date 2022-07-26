import React from "react";
import ExpenseItem from "./ExpenseItem";
import  "./ExpensesList.css"

const ExpensesList = props =>{
    let expensesContent = <p>No Expenses Found.</p>;

    if(props.items.length > 0){
      expensesContent = props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ));
    }

    return <ul className="expenses-list">

    </ul>
};

export default ExpensesList;

  {/* BASIC WAY TO WRITE {expensesContent} */}
      {/* {filteredExpenses.length === 0 && (<p>No Expenses Found.</p>)};

      {filteredExpenses.length > 0 && 
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))   
      } */}