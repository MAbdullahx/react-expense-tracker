import "./App.css";
import Header from "./Components/Header";
import Add from "./Components/Add";
import Balance from "./Components/Balance";
import Expenses from "./Components/Expense";
import Footer from "./Components/Footer";
import {useState} from "react"

function App() {
const [expenses, setExpenses] = useState([])
const [total, setTotal] = useState(0)

  function addExpense(value, description, type) {
  let id = expenses.length === 0 ? 1 : expenses[expenses.length-1].id +1
  setExpenses([...expenses, {id: id, value: value, description: description, type:type}])

  type === "expense" ? setTotal(prev => prev - value) : setTotal(prev => prev + Number(value))
}

function removeExpense(id, type, value) {
  const newExpenses = expenses.filter(expense => expense.id != id)
  setExpenses(newExpenses)
  type === "expense" ? setTotal(prev => prev + Number(value)) : setTotal(prev => prev - value)
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div>
          <Balance total={total} />
          <Add addExpense={addExpense} />
          {expenses.map(expense => (

          <Expenses expense={expense} removeExpense={removeExpense}/>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
