import "./Popup.css"
import React from "react"

class Popup extends React.Component{
    constructor(props){
        super(props)
        this.state = ({input: ""})
    }

    componentDidMount(){
        this.setState({input: this.props.cardClicked.name})
    }

    input = (event) =>{
        this.setState({input: event.target.value})
    }

    addProduct = () =>{
        this.props.addButtonClicked(this.state.input)
    }

    editProduct = () =>{
        this.props.editButtonClicked(this.state.input);
    }

    render(){
        let button = <button onClick={this.addProduct} className="popup__button">Voeg toe</button>;
        if(this.props.editMode === true){
            button = <button onClick={this.editProduct} className="popup__button">Pas aan</button>;
        }
        return(
            <div className="popup__flexWrapper">
            <article className="popup">
                <div className="popup__wrapper">
                    <label htmlFor="name" className="popup__label">Naam</label>
                    <input onChange={this.input} type="text" className="popup__input" value={this.state.input} id="name"/>
                </div>
                {button}
            </article>
            <article className="popup">
                <div className="popup__wrapper">
                    <h1>Kiez uit:</h1>
                    <ul>
                        <li>Giga chad</li>
                        <li>Auto</li>
                        <li>Saul</li>
                        <li>Happy</li>
                        <li>Sussy</li>
                    </ul>
                </div>
            </article>
            </div>
        )
    }
}

export default Popup;