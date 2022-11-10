import Placeholder from "../../Placeholder/Placeholder";
import ProductCard from "../../ProductCard/ProductCard"
import "./RightPane.css"

const RightPane = ({headerText, buttonSymbol, buttonText, productCards, addProduct, onProductCardClicked}) => {
    let onCardClicked = (idFromCard) =>{
        onProductCardClicked(idFromCard);
    }

    let productCardsToBeRendered = productCards.map(product =>{
        if(product.name === "Placeholder"){
            return <Placeholder id={product.id} buttonSymbol="+" buttonText="Voeg een product toe!" addProduct={onCardClicked}/>
        }
        return <ProductCard onCardClicked={onCardClicked} key={product.id} id={product.id} name={product.name} productImg={product.img}/>
    })

    return(
        <section className="productsWrapper">
        <header className="header">
            <h1 className="header__h1">{headerText || "Placeholder title"}</h1>
        </header>
        <ul className="productsList">
            {productCardsToBeRendered}
        </ul>
        </section>
    );
}

export default RightPane;