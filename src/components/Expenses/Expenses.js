import {useState} from 'react'
import ExpensesList from './ExpensesList'
import './Expenses.css'
import Card from "../UI/Card"
import ExpensesFilter from './ExpensesFilter' 

const Expenses = (props) => {
  const [year, updateYear] = useState('2020')
	const filterChangeHandler = (selectedYear) => {
		updateYear(selectedYear)
	}

	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === year;
	})

	// usunęliśmy całą logike do wyświetlania danych

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter 
					selectedYear={year} 
					onChangeFilter={filterChangeHandler}
				/>
				{/* Podanie przefiltrowanych elementów do nowego ExpensessList */}
				<ExpensesList items={filteredExpenses}/>
			</Card>
		</div>
    )
}
export default Expenses;