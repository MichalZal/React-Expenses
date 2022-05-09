// import { useState } from 'react'; // importuejmy metode useState z obiektu react

import './ExpenseItem.css'; // import css
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title)

  // const changeTitle =  () => {
  //   console.log(title)
  //   setTitle('nowy tytuł')
  // }

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <h2>{props.title}</h2> {/* tutaj dodajemy zmienną title */}
          <p className='expense-item__price'>${props.amount}</p>
        </div>
        {/* <button onClick={changeTitle}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
