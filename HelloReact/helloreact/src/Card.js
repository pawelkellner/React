import "./Card.css";

const Card = (props) => {
    return(
        <article onClick={props.mouseclick}>
            <header>
            <h2>{props.title || "Placeholder Title"}</h2>
            </header>
            <section>
                {props.text || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquid recusandae neque officiis odio assumenda obcaecati explicabo harum tempore? Corporis repellat maiores vero hic! Neque itaque praesentium id reprehenderit. Provident?"}
            </section>
        </article>
    );
}

export default Card;