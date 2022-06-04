import { FaBackspace } from "react-icons/fa";

function Expenses({expense, removeExpense}) {
  return (
    <div className= {expense.type === "expense" ? "expense" : "income"}>
      <div>💲{expense.value}</div>
      <div>{expense.description}</div>
      <div>
        <FaBackspace onClick={() => removeExpense(expense.id, expense.type, expense.value)} className="remove" size={30} color={"red"} />
      </div>
    </div>
  );
}

export default Expenses;
