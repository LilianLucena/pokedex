import { Router } from "express";
import LegendaryController from "./app/controllers/LegendaryController.js";
const routes = new Router();

// routes.get("/legendaries", LegendaryController.index);
routes.get("/legendaries", LegendaryController.listData);
routes.post("/legendaries", LegendaryController.create);

export default routes;
