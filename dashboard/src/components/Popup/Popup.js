import "./Popup.css"
import React from "react"

class Popup extends React.Component{
    constructor(props){
        super(props)
        this.state = ({InputValue: ""})
    }
    render(){
        return(
            <article className="popup">
                <div className="popup__wrapper">
                    <label htmlFor="name" className="popup__label">Naam</label>
                    <input type="text" className="popup__input" id="name"/>
                </div>
                <button onClick={this.props.addButtonClicked} className="popup__button">Voeg toe</button>
            </article>
        )
    }
}

export default Popup;