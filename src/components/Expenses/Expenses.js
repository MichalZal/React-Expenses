import {useState} from 'react'
import './Expenses.css'

import Card from "../UI/Card"
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter' 
import ExpensesChart from './ExpensesChart'


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
				<ExpensesChart expenses={filteredExpenses}/>
				<ExpensesList items={filteredExpenses}/>
			</Card>
		</div>
    )
}
export default Expenses;