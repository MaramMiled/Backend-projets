import {
    getAllDonneurs,
    getDonneurById,
    createDonneur,
    updateDonneur,
    patchDonneur,
    deleteDonneur,
    getDonneursByGroupeSanguin
} from "../services/donneur.service.js";

export function listDonneurs(req, res) {
    res.json(getAllDonneurs());
}

export function showDonneur(req, res) {
    const id = Number(req.params.id);
    const donneur = getDonneurById(id);

    if (!donneur) {
        return res.status(404).json({
            message: "Donneur introuvable"
        });
    }

    res.json(donneur);
}

export function addDonneur(req, res) {
    const { nom, prenom, groupeSanguin } = req.body;

    if (!nom || !prenom || !groupeSanguin) {
        return res.status(400).json({
            message: "nom, prenom et groupeSanguin sont obligatoires"
        });
    }

    const donneur = createDonneur({
        nom,
        prenom,
        groupeSanguin
    });

    res.status(201).json(donneur);
}

export function replaceDonneur(req, res) {
    const id = Number(req.params.id);
    const { nom, prenom, groupeSanguin } = req.body;

    if (!nom || !prenom || !groupeSanguin) {
        return res.status(400).json({
            message: "nom, prenom et groupeSanguin sont obligatoires pour PUT"
        });
    }

    const donneur = updateDonneur(id, {
        nom,
        prenom,
        groupeSanguin
    });

    if (!donneur) {
        return res.status(404).json({
            message: "Donneur introuvable"
        });
    }

    res.json(donneur);
}

export function modifyDonneur(req, res) {
    const id = Number(req.params.id);
    const donneur = patchDonneur(id, req.body);

    if (!donneur) {
        return res.status(404).json({
            message: "Donneur introuvable"
        });
    }

    res.json(donneur);
}

export function removeDonneur(req, res) {
    const id = Number(req.params.id);
    const deleted = deleteDonneur(id);

    if (!deleted) {
        return res.status(404).json({
            message: "Donneur introuvable"
        });
    }

    res.status(200).json({
        message: "Donneur supprimé avec succès"
    });
}

export function filterDonneurs(req, res) {
    const groupeSanguin = req.query.groupeSanguin;

    if (!groupeSanguin) {
        return res.status(400).json({
            message: "Le groupe sanguin est obligatoire"
        });
    }

    const resultats = getDonneursByGroupeSanguin(groupeSanguin);

    res.json(resultats);
}
