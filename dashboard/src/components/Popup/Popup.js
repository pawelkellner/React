import "./Popup.css"
import React from "react"

class Popup extends React.Component{
    constructor(props){
        super(props)
        this.state = ({input: ""})
    }

    componentDidMount(){
        console.log(this.props.cardClicked.name)
        this.setState({input: this.props.cardClicked.name})
        console.log(this.state.input + "  did functie")
    }

    input = (event) =>{
        this.setState({input: event.target.value})
    }

    updateProducts = () =>{
        console.log(this.state.input + " update functie")
        this.props.addButtonClicked(this.state.input)
    }

    render(){
        return(
            <article className="popup">
                <div className="popup__wrapper">
                    <label htmlFor="name" className="popup__label">Naam</label>
                    <input onChange={this.input} type="text" className="popup__input" value={this.state.input} id="name"/>
                </div>
                <button onClick={this.updateProducts} className="popup__button">Voeg toe</button>
            </article>
        )
    }
}

export default Popup;