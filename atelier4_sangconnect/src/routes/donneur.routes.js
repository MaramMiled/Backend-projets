
import express from "express";
import { validate } from "../middlewares/validate.js";
import { donneurSchema, idSchema, donneurQuerySchema, updateDonneurSchema } from "../validators/donneur.validator.js";
import {
    listDonneurs,
    showDonneur,
    addDonneur,
    replaceDonneur,
    modifyDonneur,
    removeDonneur, 
    filterDonneurs
} from "../controllers/donneur.controller.js";

const router = express.Router();

router.get("/",validate(donneurQuerySchema, "query"),listDonneurs);
router.get("/:id",validate(idSchema, "params"), showDonneur);
router.post("/", validate(donneurSchema, "body"), addDonneur);
router.put("/:id",validate(idSchema, "params"),validate(donneurSchema, "body"), replaceDonneur);
router.patch("/:id",validate(idSchema, "params"),validate(updateDonneurSchema, "body"), modifyDonneur);
router.delete("/:id", validate(idSchema, "params"), removeDonneur);

export default router;