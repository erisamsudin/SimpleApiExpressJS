// import express
import express from "express";
// import controllers
import {
     search
    } from "../controllers/search.js";

const router = express.Router();
router.get('/:movietitle', search);

export default router;

