import LegendaryModel from "../../models/legendary/LegendaryModel";

export default class ListLegendariesService {
  constructor() {}

  async listAll() {
    try {
      if (pokemonName) {}
      return await this.listOne(pokemonName);
    const pokemons = await LegendaryModel.findAll()
     
    return pokemons;
    } catch (error) {
      console.log(error);
      return {erro: error.message };
    }
  }

  async listOne(pokemonName) {
    try {
    const pokemon = await LegendaryModel.findOne({
      where: { name: pokemonName },
    });
    
    if (!pokemon)
    return {mensagem: "Pokemon não encontrado"};

    return pokemon;
    } catch (error) {
      console.log(error);
      return {erro: error.message };
    }
  }
}