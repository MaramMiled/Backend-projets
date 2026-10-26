const donneurs = [
    {
        id: 1,
        nom: "Ben Ali",
        prenom: "Ahmed",
        groupeSanguin: "A+"
    },
    {
        id: 2,
        nom: "Trabelsi",
        prenom: "Sami",
        groupeSanguin: "O+"
    },
    {
        id: 3,
        nom: "Mansouri",
        prenom: "Amine",
        groupeSanguin: "B+"
    }
];

export async function findAll() {
  return donneurs;
}

export async function findById(id) {
  return donneurs.find(donneur => donneur.id === id);
}

export async function searchByVille(ville) {
  return donneurs.filter(
    donneur => donneur.ville.toLowerCase() === ville.toLowerCase()
  );
}