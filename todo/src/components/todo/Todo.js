import Item from "../item/item"
import "./Todo.css";


const Todo = () =>{
    const tasks = [
        {
            name: "Groceries",
            done: false,
            id: 1
        },
        {
            name: "Walking the dog",
            done: false,
            id: 2
        },
        {
            name: "Get bitches",
            done: false,
            id: 3
        },
        {
            name: "Code awesome stuff",
            done: false,
            id: 4
        },
        {
            name: "Code more awesome stuff",
            done: false,
            id: 5
        }
    ];

    let listItems = tasks.map(task => {
        return <Item key={task.id} name={task.name} done={task.done}/>
    })

    console.log(listItems);
    return(
        <article className="todo">
            <header className="todo__header">
                <h1 className="todo__heading">Things to do:</h1>
            </header>
            <ul className="todo__list">
                {listItems}
            </ul>
        </article>
    )
}

export default Todo;