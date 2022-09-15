import "./Card.css";

const Card2 = () => {
    const hallo = () =>{
        console.log("ik ben kaartje twee");
    }

    return(
        <article onClick={hallo}>
            <header>
                <h2>Tweede kaart</h2>
            </header>
            <section>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae minima optio, doloremque veniam dicta repellendus perferendis impedit ullam rerum dolorem, cumque exercitationem quaerat quibusdam perspiciatis tenetur et architecto vitae quam!
            </section>
        </article>
    );
}

export default Card2;