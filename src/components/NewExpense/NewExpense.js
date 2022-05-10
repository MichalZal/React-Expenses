import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import {useState} from 'react'

const NewExpense = (props) => {
    const [isEdiding, setIsEditing] = useState(false)

	const handleSaveExpenseData = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
	};

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

	return (
		<div className="new-expense">
			{!isEdiding ? <button onClick={startEditingHandler}>Add new Expense</button> :
			 <ExpenseForm 
                onSaveExpenseData={handleSaveExpenseData} 
                onStopEditing={stopEditingHandler}
            />}
		</div>
	);
};

export default NewExpense;
