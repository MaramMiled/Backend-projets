
import express from "express";

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

router.get("/",
    (req, res, next) => {
        if (req.query.groupeSanguin) {
            return filterDonneurs(req, res);
        }
        next();
    },
    listDonneurs
);
router.get("/:id", showDonneur);
router.post("/", addDonneur);
router.put("/:id", replaceDonneur);
router.patch("/:id", modifyDonneur);
router.delete("/:id", removeDonneur);

export default router;