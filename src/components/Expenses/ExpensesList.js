import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
  // to jest nasza przefiltrowana lista
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expensess</h2>
  }

  return (
    <ul className='expenses-list'>
      {props.items.map(expense =>
			<ExpenseItem
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
				key={expense.id}
			/>
		)}
    </ul>
  )
}

export default ExpensesList;