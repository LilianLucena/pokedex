import LegendaryModel from "../models/LegendaryModel.js";

class LegendaryService {
  listLegendariesServies() {
    const pokemon = new LegendaryModel(
      1,
      "MewTwo",
      "Descrição",
      "pokemon",
      "1000,00",
      "1000,00",
      "1000,00",
      "1000,00",
      "1000,00",
      "1000,00"
    );
    const pokemon2 = new LegendaryModel(
      2,
      "Pikachu",
      "Descrição",
      "pokemon",
      "1000,00",
      "1000,00",
      "1000,00",
      "1000,00",
      "1000,00",
      "1000,00"
    );
    return [pokemon, pokemon2];
  }
  listPokemonData(pokemonName) {
    const pokemonList = this.listLegendariesServies();
    const pokemon = pokemonList.find((item) => item.name === pokemonName);
    return pokemon;
  }
}

export default new LegendaryService();
