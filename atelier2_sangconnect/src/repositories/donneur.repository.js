const donneurs = [
    {
        id: 1,
        nom: "Ben Ali",
        prenom: "Ahmed",
        groupeSanguin: "O+",
        ville: "Tunis"
    },
    {
        id: 2,
        nom: "Ben Ali",
        prenom: "Sarra",
        groupeSanguin: "A-",
        ville: "Sousse"
    },
    {
        id: 3,
        nom: "Saad",
        prenom: "Mohamed",
        groupeSanguin: "B+",
        ville: "Sfax"
    },
    {
        id: 4,
        nom: "Zayati",
        prenom: "Sahar",
        groupeSanguin: "AB-",
        ville: "Monastir"
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