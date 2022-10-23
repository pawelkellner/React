import React from "react";
import Item from "../item/item";
import tasksObject from "../../data/tasks";
import Input from "../../components/Input/Input";
import "./Todo.css";


class Todo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tasks: [],
        }
    }

    // runt naa het aanmaken en tekenen van een component
    componentDidMount(){
        this.setState({
            tasks: [],
        })
    }

    // runt na het update van de state
    componentDidUpdate(){

    }

    update = () => {
        let tempArray = this.state.tasks;
        let combinedArray = tempArray.concat([
            {
                name: "Todo afmaken",
                done: false,
                id: 10,
            }
        ]);
        this.setState({
            tasks: combinedArray,
        })
    }

    InputPressedEnter = (inputFromInputComponent) => {
        let toBeAdded = [
            {
                name: inputFromInputComponent,
                done: false,
                id: 100,
            }
        ]
        let arrays = this.state.tasks.concat(toBeAdded);
        this.setState({
            tasks: arrays,
        })
    }

    render(){
        let Items = this.state.tasks.map(task => {
            return <Item key={task.id} name={task.name} done={task.done}></Item>
        });
        return(
            <article className="todo">
                <header className="todo__header">
                    <h1 className="todo__heading">{this.props.title}</h1>
                </header>
                <ul className="todo__list">
                    {Items}
                </ul>
                <Input inputPressedEnter={this.InputPressedEnter}/>
            </article>
        ) 
    }
}

export default Todo;