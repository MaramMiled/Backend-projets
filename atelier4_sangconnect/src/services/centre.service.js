let centres = [
    {
        id: 1,
        nom: "Centre de transfusion",
        ville: "Sousse",
        adresse: "Centre-ville",
        telephone: "73123456"
    },
    {
        id: 2,
        nom: "Centre régional",
        ville: "Tunis",
        adresse: "Bab Saadoun",
        telephone: "71234567"
    },
    {
        id: 3,
        nom: "Centre de collecte",
        ville: "Sousse",
        adresse: "Hammam Sousse",
        telephone: "73222333"
    }
];

export function getAllCentres(ville) {
    if (ville) {
        return centres.filter(
            centre =>
                centre.ville.toLowerCase() === ville.toLowerCase()
        );
    }

    return centres;
}

export function getCentreById(id) {
    return centres.find(centre => centre.id === id);
}

export function createCentre(data) {
    const id = centres.length > 0
        ? Math.max(...centres.map(centre => centre.id)) + 1
        : 1;

    const nouveauCentre = { id, ...data };

    centres.push(nouveauCentre);
    return nouveauCentre;
}

export function updateCentre(id, data) {
    const index = centres.findIndex(centre => centre.id === id);

    if (index === -1) {
        return null;
    }

    centres[index] = { id, ...data };
    return centres[index];
}

export function patchCentre(id, data) {
    const centre = getCentreById(id);

    if (!centre) {
        return null;
    }

    Object.assign(centre, data, { id });
    return centre;
}

export function deleteCentre(id) {
    const index = centres.findIndex(centre => centre.id === id);

    if (index === -1) {
        return false;
    }

    centres.splice(index, 1);
    return true;
}