import Navigation from "../components/Navigation/Navigation.js";
import Header from "../components/Header/Header.js";
import Section from "../components/Section/Section.js";
import Card from "../components/Card/Card.js";

const Homepage = () =>{
    return(
        <>
            <Navigation />
            <Header 
                bigTitle="Coffeez" 
                smallTitle="Coffee that will make you smile" 
                buttonText="Order Now"
            />
            <Section headerTitle="Our Benjitos">
                <Card 
                image="coffeeThumb.jpg"
                desc="Koffie in de zon is lekker warm dus dat betekent hij is wel lekker!"/>
                <Card 
                image="coffeeThumb2.jpg"
                desc="Zee van koffie is wat minder lekker maar ook wel goed. Vandaag is de thema koffie met zwart!"/>
                <Card 
                image="coffeeThumb3.jpg"
                desc="Koffie met boeken lezen is zeer heerlijk dus ik raad het erg aan. Drink koffie en lees je boeken!"/>
                <Card 
                image="coffeeThumb4.jpg"
                desc="Koffie met plant en bed. Kan wel maar ook weer niet, want als je koffie valt heb je geen bed meer."/>
            </Section>
        </>
    );
}

export default Homepage