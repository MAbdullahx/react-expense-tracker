import { FaPlus } from "react-icons/fa";
import {useState} from "react"
// context
function Add({addExpense}) {
  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")
  const [type, setType] = useState("expense")
  return (
    <div className="add-expense space">
      <input onChange={(e) => setInput1(e.target.value)} className="expense-amount" type="number" placeholder="$" />
      <input
        onChange={(e) => setInput2(e.target.value)}
        className="expense-input"
        type="text"
        placeholder="Add expense description"
      />
      <select onChange={(e) => setType(e.target.value)}>
        <option>expense</option>
        <option>income</option>
      </select>
      <button className="expense-button" onClick={() => addExpense(input1, input2, type)}>
        <FaPlus />
      </button >

    </div>
  );
}

export default Add;
