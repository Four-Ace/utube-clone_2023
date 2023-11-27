import express from "express";
import {join} from "../controllers/userController.js";
import {trending} from "../controllers/videoController.js";

const globalrouter = express.Router();

globalrouter.get("/", trending);
globalrouter.get("/join", join);

export default globalrouter;
