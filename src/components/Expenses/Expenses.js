import {useState} from 'react'

import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from "../UI/Card"
import ExpensesFilter from './ExpensesFilter' 

const Expenses = (props) => {
    const [year, updateYear] = useState('2020')
	const filterChangeHandler = (selectedYear) => {
		updateYear(selectedYear)
	}

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selectedYear={year} onChangeFilter={filterChangeHandler}/>
				<ExpenseItem
					key={props.items[0].id}
					amount={props.items[0].amount}
					title={props.items[0].title}
					date={props.items[0].date}
				/>

				<ExpenseItem
					key={props.items[1].id}
					amount={props.items[1].amount}
					title={props.items[1].title}
					date={props.items[1].date}
				/>

				<ExpenseItem
					key={props.items[2].id}
					amount={props.items[2].amount}
					title={props.items[2].title}
					date={props.items[2].date}
				/>

				<ExpenseItem
					key={props.items[3].id}
					amount={props.items[3].amount}
					title={props.items[3].title}
					date={props.items[3].date}
				/>
			</Card>
		</div>
    )
}
export default Expenses;