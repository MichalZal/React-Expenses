import {useState} from 'react'
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "Car Insurance",
		amount: 290.67,
		date: new Date(2022, 2, 28),
	},
	{
		id: "e2",
		title: "Chop a tree",
		amount: 290.67,
		date: new Date(2021, 3, 28),
	},
	{
		id: "e3",
		title: "Go to doctor",
		amount: 290.67,
		date: new Date(2020, 4, 28),
	},
	{
		id: "e4",
		title: "Drive a car",
		amount: 290.67,
		date: new Date(2019, 5, 28),
	},
	{
		id: "e5",
		title: "Break a Car",
		amount: 290.67,
		date: new Date(2019, 6, 28),
	},
];


const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

	
	// ta funckja będzie podana do NewExpense
	const addExpenseHanlder = expense => {
		console.log('in app js ', expense);
		setExpenses((prev, next) => {
			return [expense, ...prev]
		});
	}

	return (
		<div className="App">
			<NewExpense onAddExpense={addExpenseHanlder}/>
			<Expenses items={expenses}/>
		</div>
	);
}

export default App;
