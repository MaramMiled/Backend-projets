import express from "express";
import {
    listCentres,
    showCentre
} from "../controllers/centre.controller.js";

const router = express.Router();

router.get("/", listCentres);
router.get("/:id", showCentre);

export default router;