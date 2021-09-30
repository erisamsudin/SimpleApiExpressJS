// import express
import express from "express";
// import controllers
import {
     searchdetail
    } from "../controllers/searchdetail.js";
// express router
const router = express.Router();
router.get('/:movietitle', searchdetail);
export default router;

