import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {

	const expenses = [
		{
			id: "e1",
			title: "Car Insurance",
			amount: 290.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: "e2",
			title: "Chop a tree",
			amount: 290.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: "e3",
			title: "Go to doctor",
			amount: 290.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: "e4",
			title: "Drive a car",
			amount: 290.67,
			date: new Date(2021, 2, 28),
		},
	];

	// ta funckja będzie podana do NewExpense
	const addExpenseHanlder = expense => {
		console.log('in app js ', expense);
	}

	return (
		<div className="App">
			<NewExpense onAddExpense={addExpenseHanlder}/>
			<Expenses items={expenses}/>
		</div>
	);
}

export default App;
