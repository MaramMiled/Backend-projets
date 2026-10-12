import {
    getAllCentres,
    getCentreById,
    createCentre,
    updateCentre,
    patchCentre,
    deleteCentre
} from "../services/centre.service.js";

const champsObligatoires = [
    "nom",
    "ville",
    "adresse",
    "telephone"
];

function donneesValides(data) {
    return champsObligatoires.every(
        champ =>
            typeof data[champ] === "string" &&
            data[champ].trim() !== ""
    );
}

export function listCentres(req, res) {
    const ville = req.query.ville;
    res.json(getAllCentres(ville));
}

export function showCentre(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Identifiant invalide"
        });
    }

    const centre = getCentreById(id);

    if (!centre) {
        return res.status(404).json({
            message: "Centre introuvable"
        });
    }

    res.json(centre);
}

export function addCentre(req, res) {
    if (!donneesValides(req.body)) {
        return res.status(400).json({
            message: "Données invalides"
        });
    }

    const centre = createCentre({
        nom: req.body.nom.trim(),
        ville: req.body.ville.trim(),
        adresse: req.body.adresse.trim(),
        telephone: req.body.telephone.trim()
    });

    res.status(201).json(centre);
}

export function replaceCentre(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Identifiant invalide"
        });
    }

    if (!donneesValides(req.body)) {
        return res.status(400).json({
            message: "Données invalides"
        });
    }

    const centre = updateCentre(id, {
        nom: req.body.nom.trim(),
        ville: req.body.ville.trim(),
        adresse: req.body.adresse.trim(),
        telephone: req.body.telephone.trim()
    });

    if (!centre) {
        return res.status(404).json({
            message: "Centre introuvable"
        });
    }

    res.json(centre);
}

export function modifyCentre(req, res) {
    const id = Number(req.params.id);
    const donnees = req.body;

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Identifiant invalide"
        });
    }

    const champsAutorises = [
        "nom", "ville", "adresse", "telephone"
    ];

    if (
        !donnees ||
        typeof donnees !== "object" ||
        Array.isArray(donnees)
    ) {
        return res.status(400).json({
            message: "Données invalides"
        });
    }

    const cles = Object.keys(donnees);

    if (
        cles.length === 0 ||
        cles.some(cle => !champsAutorises.includes(cle)) ||
        Object.values(donnees).some(
            valeur =>
                typeof valeur !== "string" ||
                valeur.trim() === ""
        )
    ) {
        return res.status(400).json({
            message: "Données invalides"
        });
    }

    const donneesNettoyees = Object.fromEntries(
        Object.entries(donnees).map(
            ([cle, valeur]) => [cle, valeur.trim()]
        )
    );

    const centre = patchCentre(id, donneesNettoyees);

    if (!centre) {
        return res.status(404).json({
            message: "Centre introuvable"
        });
    }

    res.json(centre);
}

export function removeCentre(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Identifiant invalide"
        });
    }

    const deleted = deleteCentre(id);

    if (!deleted) {
        return res.status(404).json({
            message: "Centre introuvable"
        });
    }

    res.status(204).end();
}