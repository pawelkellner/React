import {Link} from "react-router-dom";
import "./Intro.css";

const Intro = () =>{
    return(
        
            <article className="introKaartje">
                <h1>Skills quiz</h1>
                <Link className="startButton" to="/vraag/1">Start de quiz</Link>
            </article>
        
    );
}

export default Intro;