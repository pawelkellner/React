import img from "../../../images/car.jpg"
import "./RightPane.css"

const RightPane = ({headerText, buttonSymbol, buttonText, productCards, addProduct}) => {



    let productCardsToBeRendered = productCards.map(product =>{
        if(product.name === "Placeholder"){
            return( 
                <li key={product.id} className="productsList__item">
                    <button onClick={addProduct} className="productsList__button">{buttonSymbol || "*"}</button>
                    <p className="productsList__text">{buttonText || "Placeholder text"}</p>
                </li>
            )
        }
        return(
            <li key={product.id} className="productsList__item product">
                <img className="productsList__img" src={product.img} alt={product.name}/>
                <div className="productsList__Fade">
                    <p className="productsList__imgText">{product.name}</p>
                </div>
            </li>
        )
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