let donneurs = [
    { id: 1, nom: "Ben Ali", prenom: "Ahmed", groupeSanguin: "A+" },
    { id: 2, nom: "Trabelsi", prenom: "Sara", groupeSanguin: "O+" },
    { id: 3, nom: "Khelifi", prenom: "Yassine", groupeSanguin: "AB+" }
];

export function getAllDonneurs() {
    return donneurs;
}

export function getDonneurById(id) {
    return donneurs.find(donneur => donneur.id === id);
}

export function createDonneur(data) {
    const nextId = donneurs.length > 0
        ? Math.max(...donneurs.map(d => d.id)) + 1
        : 1;

    const nouveauDonneur = {
        id: nextId,
        ...data
    };

    donneurs.push(nouveauDonneur);
    return nouveauDonneur;
}

export function updateDonneur(id, data) {
    const index = donneurs.findIndex(d => d.id === id);

    if (index === -1) {
        return null;
    }

    donneurs[index] = {
        id,
        ...data
    };

    return donneurs[index];
}

export function patchDonneur(id, data) {
    const donneur = getDonneurById(id);

    if (!donneur) {
        return null;
    }

    Object.assign(donneur, data, { id });
    return donneur;
}

export function deleteDonneur(id) {
    const index = donneurs.findIndex(d => d.id === id);

    if (index === -1) {
        return false;
    }

    donneurs.splice(index, 1);
    return true;
}

export function getDonneursByGroupeSanguin(groupeSanguin) {
    return donneurs.filter(
        donneur => donneur.groupeSanguin === groupeSanguin
    );
}