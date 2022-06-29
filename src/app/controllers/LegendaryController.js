import LegendaryService from "../services/LegendariesService.js";
import createLegendaryService from "../services/createLegendaryService.js";

class LegendaryController {
  index(req, res) {
    const listLegendaries = LegendaryService.listLegendariesServies();
    res.json(listLegendaries);
  }
  listData(req, res) {
    const { name } = req.query;
    const legendary = LegendaryService.listPokemonData(name);
    res.json(legendary);
  }
  create(req, res) {
    const {
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense,
    } = req.body;
    const pokemon = createLegendaryService.createLegendary(
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense
    );
    res.json(pokemon);
  }
}

export default new LegendaryController();
