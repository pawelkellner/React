import React from "react";
import "./Input.css";


class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {inputValue: ""}
    }

    update = (event) =>{
        this.setState({inputValue: event.target.value});
    }

    enter = (event) =>{
        if(event.keyCode === 13){
            console.log("enter gedrukt");
            this.props.inputPressedEnter(this.state.inputValue);
        }
        console.log(event);
    }

    knop = () =>{
        if(this.state.inputValue === ""){
            window.alert("Voer een to do in!")
            console.log(this.state.inputValue);
        }else{
            this.props.inputPressedEnter(this.state.inputValue);
            console.log(this.state.inputValue);
        }
        
    }

    render(){
                //Als we met document.getelementd of document.query werken dan is t component uncontrolled
        return(
            <section className="section__button">
                <input onKeyUp={this.enter} onChange={this.update} value={this.state.inputValue} className="input" type="text" placeholder="Wat te doen?"/>
                <button onClick={this.knop} className="button">Voeg toe</button>
            </section>
        );
    }
}

export default Input;