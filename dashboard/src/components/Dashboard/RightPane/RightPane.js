import ProductCard from "../../ProductCard/ProductCard"
import "./RightPane.css"

const RightPane = ({headerText, buttonSymbol, buttonText, productCards, addProduct}) => {
    let onCardClicked= (idFromCard) =>{
        console.log("hallo benjito: " + idFromCard)
    }

    let productCardsToBeRendered = productCards.map(product =>{
        if(product.name === "Placeholder"){
            return( 
                <li key={product.id} className="productsList__item">
                    <button onClick={addProduct} className="productsList__button">{buttonSymbol || "*"}</button>
                    <p className="productsList__text">{buttonText || "Placeholder text"}</p>
                </li>
            )
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