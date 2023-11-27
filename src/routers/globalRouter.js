import express from "express";
import {join, login} from "../controllers/userController.js";
import {trending, search} from "../controllers/videoController.js";

const globalrouter = express.Router();

globalrouter.get("/", trending);
globalrouter.get("/join", join);
globalrouter.get("/login", login);
globalrouter.get("/search", search);

export default globalrouter;
