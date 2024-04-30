import { useEffect, useState } from "react";
import { DataFetched, PokemonData } from "./interfaces";
import "./App.css";
import { BringPokemon } from "./services/apiCalls";

function App() {
  const [pokemon, setPokemon] = useState<PokemonData | void>();
  const [flag, setFlag] = useState<boolean>(false);
  const [choice, setChoice] = useState<string>("");
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    const fetchPokemon = async (): Promise<void> => {
      const fetched: DataFetched = await BringPokemon(choice);

      if(!fetched.success){
        setMsg(fetched.message)
        setPokemon(undefined)
      } else {
        setMsg("")
        setPokemon(fetched.data)
      }
      
      setFlag(true);
    };

    if (!flag) {
      fetchPokemon();
    }

  }, [pokemon, choice]);

  const newPokemon = (pok: string) => {

    setFlag(false)
    setChoice(pok.toLowerCase())
  }

  return (
    <>
      <div className={"monster"} onClick={() => newPokemon("Charmander")}>Charmander</div>
      <div className={"monster"} onClick={() => newPokemon("Mantine")}>Mantine</div>
      <div className={"monster"} onClick={() => newPokemon("Pikachu")}>Pikachu</div>
      <div className={"monster"} onClick={() => newPokemon("Vegeta")}>Vegeta</div>
      {pokemon?.name}
      {msg}
    </>
  );
}

export default App;
