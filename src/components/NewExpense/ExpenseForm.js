import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	// tworzymy zmienne.
	const [enteredTitle, setEnteredTitle] = useState("title");
	const [enteredAmount, setEnteredAmount] = useState("0");
	const [enteredDate, setEnteredDate] = useState("2020-0-0");

	// przypisujemy zmiennym wartość value z inptów
	const titleChangeHandler = (e) => {
		setEnteredTitle(e.target.value);
	};

	const amountChangeHandler = (e) => {
		setEnteredAmount(e.target.value);
	};

	const dateChangeHandler = (e) => {
		setEnteredDate(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		// przy submicie dodajemy  te wartosci do obiektu:
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		// tutaj wywołujemy atrybut w parencie, który wkasuje na funckje
		props.onSaveExpenseData(expenseData);

		// resetujuemy inputy
        	setEnteredTitle('')
        	setEnteredAmount('')
        	setEnteredDate('')
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label> Title </label>
					<input
					  type="text"
					  value={enteredTitle}
					  onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label> Amount </label>
					<input
					  type="number"
					  min="0.01"
					  step="0.01"
                        		  value={enteredAmount}
					  onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label> Date </label>
					<input
					  type="date"
					  min="2022-05-04"
					  max="2022-12-31"
                        		  value={enteredDate}
					  onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add form</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
