import React from "react"
import "./Dashboard.css"
import LeftPane from "./LeftPane/LeftPane"
import RightPane from "./RightPane/RightPane"
import autoImage from "../../images/car.jpg"
import chadImage from "../../images/giga_chad.jpg"
import Popup from "../Popup/Popup"

class Dashboard  extends React.Component{
    constructor(props){
        super(props)
        this.state = {productsCards: [], open: true}
    }

    componentDidMount(){
        let productCards =
        [
            {
                name: "Placeholder"
            },
        ];
        this.setState({productsCards: productCards})
    }

    addProduct = () =>{
        this.setState({
            open: !this.state.open
        })
    }

    addButtonClicked = (inputFromPopup) =>{
        let toBeAddedImage;
        switch(inputFromPopup){
            case("Giga chad"):
                toBeAddedImage = chadImage;
                break;
            case("Auto"):
                toBeAddedImage = autoImage
                break;
            default:
                break;
        }
        let toBeAdded = 
        [
            {
                name: inputFromPopup,
                img: toBeAddedImage
            }
        ];
        let fullArray = this.state.productsCards.concat(toBeAdded)
        this.setState({
            productsCards: fullArray,
            open: !this.state.open
        })
    }

    render(){
        let navigationListItems = 
        [
            {
                name: "Home",
                message: 0,
            },
            {
                name: "Facturen",
                message: 3,
            },
            {
                name: "Bestellingen",
                message: 0,
            },
            {
                name: "Retour",
                message: 1,
            },
            {
                name: "Contact",
                message: 2,
            }
        ];
        if(this.state.open === true){
            return(
                <article className="dashboard">
                    <LeftPane navigationListItems={navigationListItems} buttonText="Go premium!"/>
                    <RightPane 
                    addProduct={this.addProduct}
                    productCards={this.state.productsCards}
                    headerText="Mijn Producten"
                    buttonSymbol="+"
                    buttonText="Voeg een product toe!"
                    />
                </article>
            )
        }
        return(
            <Popup 
            addButtonClicked={this.addButtonClicked}
            />
        )
        
    }
}

export default Dashboard;