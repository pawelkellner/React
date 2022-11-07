import React from "react"
import "./Dashboard.css"
import LeftPane from "./LeftPane/LeftPane"
import RightPane from "./RightPane/RightPane"
/*import data from data source */
import navObject from "../data/navigationList"
import productsObject from "../data/products"
import Popup from "../Popup/Popup"
import chooseImage from "../../helpers/chooseImage"
class Dashboard  extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            productsCards: [], 
            open: true, 
            cardClicked: {},
            editMode: false}
    }

    componentDidMount(){
        this.setState({productsCards: productsObject.products})
    }

    addProduct = () =>{
        this.setState({
            open: !this.state.open
        })
    }

    addButtonClicked = (inputFromPopup) =>{
        let imageFromHelper = chooseImage(inputFromPopup);
        let toBeAdded = 
        [
            {
                id: this.state.productsCards.length + 1,
                name: inputFromPopup,
                img: imageFromHelper
            }
        ];
        let fullArray = this.state.productsCards.concat(toBeAdded)
        this.setState({
            productsCards: fullArray,
            open: !this.state.open
        })
    }

    onCardClicked = (idFromCard) =>{
        if(this.state.productsCards[idFromCard - 1].name === "Placeholder"){
            this.setState({
                editMode: false
            })
        }else{
            this.setState({
                editMode: true
            })
        }
        this.setState({
            open: !this.state.open,
            cardClicked: this.state.productsCards[idFromCard -1]
        })
    }

    render(){
        if(this.state.open === true){
            return(
                <article className="dashboard">
                    <LeftPane navigationListItems={navObject.navigationListItems} buttonText="Go premium!"/>
                    <RightPane
                    onProductCardClicked={this.onCardClicked} 
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
            editMode={this.state.editMode}
            cardClicked={this.state.cardClicked}
            addButtonClicked={this.addButtonClicked}
            />
        )
        
    }
}

export default Dashboard;