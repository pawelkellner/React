import React from "react";
import "./CounterCard.css"

const CounterCard = ({counterNumber}) =>{
        return(
            <section className="counterCard">
                <h2 className="counterCard__h2">{counterNumber}</h2>
            </section>
        )
}

export default CounterCard;