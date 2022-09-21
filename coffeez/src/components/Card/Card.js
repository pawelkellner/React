import "./Card.css";

const Card = (props) => {
    let cardImage = <img src={"/images/" + props.image} alt=""/>;

    if(props.image === undefined){
        cardImage = <img src={"/images/back_coffee.jpg"} alt=""/>;
    }
    return(
        <article class="card">
            <figure class="card__figure">
                {cardImage}
            </figure>
            <section class="card__section">
                <p>{props.desc || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto temporibus placeat reiciendis. Libero, at expedita."}</p>
            </section>
        </article>
    );
}

export default Card;