import LegendaryModel from "../models/LegendaryModel.js";

class LegendaryController {
  index(req, res) {
    const pokemon = new LegendaryModel(1, "MewTwo", "Descrição", "pokemon");
    res.json(pokemon);
  }
}

export default new LegendaryController();
