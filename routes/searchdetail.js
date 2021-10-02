// import express
import express from "express";
// import controllers
import {
     searchdetail,
     LogicTest,
     RefactorCode
    } from "../controllers/searchdetail.js";
// express router
const router = express.Router();
router.get('/:movietitle', searchdetail);
router.post('/Logic', LogicTest);
router.post('/Refactor', RefactorCode);
export default router;

