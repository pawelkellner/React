const Placeholder = (props) =>{
    const placeholderClicked = () =>{
        props.addProduct(props.id);
    }
    return(
        <li className="productsList__item">
            <button onClick={placeholderClicked} className="productsList__button">{props.buttonSymbol || "*"}</button>
            <p className="productsList__text">{props.buttonText || "Placeholder text"}</p>
        </li>
    )
}

export default Placeholder;