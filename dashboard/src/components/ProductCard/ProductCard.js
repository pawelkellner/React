const ProductCard  = (props) =>{
    const productCardClicked = () =>{
        props.onCardClicked(props.id)
    }
    return(
        <li onClick={productCardClicked} className="productsList__item productsList__item--gray product">
                <img className="productsList__img" src={props.productImg} alt={props.name}/>
                <div className="productsList__Fade">
                    <p className="productsList__imgText">{props.name}</p>
                </div>
        </li>
    )
}

export default ProductCard;