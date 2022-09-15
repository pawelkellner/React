import "./Card.css";

const Card = () => {
    const hallo = () =>{
        console.log("ik ben kaartje een");
    }
    return(
        <article onClick={hallo}>
            <header>
                <h2>Eerste kaart</h2>
            </header>
            <section>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae minima optio, doloremque veniam dicta repellendus perferendis impedit ullam rerum dolorem, cumque exercitationem quaerat quibusdam perspiciatis tenetur et architecto vitae quam!
            </section>
        </article>
    );
}

export default Card;