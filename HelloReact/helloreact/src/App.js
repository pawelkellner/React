import Card from "./Card";
import "./App.css";

const App = () => {
    const click = () => {
        console.log("ik ben geklikt");
    }

    const random = () => {
        console.log(Math.random());
    }

    const sum = () => {
        console.log(12312 + 1244);
    }

    return(
        <>
            <Card mouseclick={click} />
            <Card mouseclick={random} />
            <Card mouseclick={sum} />
        </>
    );
}

export default App;