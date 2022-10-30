import "./PokemonCardWrapper.css"
import PokemonCard from "../../components/PokemonCard/PokemonCard"


const PokemonCardWrapper = (props) => {
    return(
        <section className="pokemonCardWrapper">
            <PokemonCard 
                pokemonName="Wooper"
                pokemonType={["water", "ground"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png"
                pokemonHP="55"
                updateCounter={props.updateCounter}
                />
            <PokemonCard 
                pokemonName="Mewtwo"
                pokemonType={["psychic"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
                pokemonHP="55"
                updateCounter={props.updateCounter}
            />
            <PokemonCard 
                pokemonName="Ditto"
                pokemonType={["normal"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                pokemonHP="55"
                updateCounter={props.updateCounter}
            />
            <PokemonCard 
                pokemonName="Pikachu"
                pokemonType={["electric"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                pokemonHP="55"
                updateCounter={props.updateCounter}
            />
        </section>   
    )
}

export default PokemonCardWrapper