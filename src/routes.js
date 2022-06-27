import { Router } from "express";
import LegendaryController from "./app/controllers/LegendaryController.js";
const routes = new Router();

routes.get("/legendaries", LegendaryController.index);

export default routes;
