import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className; 
    // to umozliwia zachowanie klasy przez elemnt, który zastępujemy. 
    // Dzeki czemu dalej będa dobre style
    return (            //ta klasa 
        <div className={classes}>{props.children}</div>
    )
    // Jednak ogólnie między tagami Card śie nic nie wyświetliło 
    // dlatego trzeba było dodać props.childeren zeby to było mozliwe. 
}
export default Card;