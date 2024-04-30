import { DataFetched, PokemonData } from "../interfaces";

export const BringPokemon = async (
  choice: string | number
): Promise<DataFetched> => {
  try {
    const response: any = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${
        choice !== "" ? choice : "charmander"
      }`
    );

    const rawData: PokemonData = await response.json();

    const answer: DataFetched = {
      success: true,
      message: "Here is your Pocket Monster",
      data: rawData,
    };

    return answer;
  } catch (error: any) {

    if(error.message === `Unexpected token 'N', "Not Found" is not valid JSON`){
      error.message = "Pokemon not found on the whole API"
    }
    const answer: DataFetched = {
      success: false,
      message: error.message,
      data: [],
    };
    return answer;
  }
};
