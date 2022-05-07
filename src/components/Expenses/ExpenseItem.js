import { useState } from 'react'; // importuejmy metode useState z obiektu react

import './ExpenseItem.css'; // import css
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  // tworzymy hooka
  // pierwszy argument to nasza wartość. 
  // drugi argument to funckja, która ją upadtuje.
  const [title, setTitle] = useState(props.title)
  // zwraca tablica z pierwszą wartośćią i funkcją , która ją updatuje.

  const changeTitle =  () => {
    console.log(title)
    setTitle('nowy tytuł')
  }
  
  return (
    <Card className='expense-item'> 
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2> {/* tutaj dodajemy zmienną title */}
        <p className='expense-item__price'>${props.amount}</p>
      </div>
      <button onClick={changeTitle}>Change Title</button>
	</Card> 
  );
};

export default ExpenseItem;
