/*import { formatCentreName } from "./utils/format.js";
import {
  addition,
  multiplication,
  soustraction
} from "./utils/math.js";*/


/*const nom = formatCentreName("Centre Tunis", "Tunis");
console.log(nom);*/

/*console.log("Début");

setTimeout(() => {
  console.log("Opération terminée");
}, 2000);

console.log("Fin");*/

/*const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Centre récupéré");
  }, 1000);
});

promise.then(result => {
  console.log(result);
});*/

/*function getCentre() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        nom: "Centre Tunis",
        ville: "Tunis"
      });
    }, 1000);
  });
}

getCentre()
  .then(centre => {
    console.log(centre);
  });*/

/*function getCentre() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Impossible de récupérer le centre"));
    }, 1000);
  });
}

getCentre()
  .then(centre => {
    console.log(centre);
  })
  .catch(error => {
    console.error(error.message);
  });*/

/*function getCentre() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Centre indisponible"));
    }, 1000);
  });
}

async function afficherCentre() {
  try {
    const centre = await getCentre();

    console.log(centre);
  } catch (error) {
    console.error("Erreur :", error.message);
  }
}

afficherCentre();*/

import http from "node:http";
import { handleCentreRoutes } from "./routes/centre.routes.js";
import { sendJson } from "./utils/http.js";
import {
  findAll,
  findById,
  searchByCity
} from "../repositories/centre.repository.js";

const port = 3000;

const server = http.createServer(async (req, res) => {
  const handled = await handleCentreRoutes(req, res);

  if (handled) {
    return;
  }

  if (req.url === "/" && req.method === "GET") {
    sendJson(res, 200, {
      message: "Bienvenue dans SangConnect"
    });

    return;
  }

  sendJson(res, 404, {
    error: "Route non trouvée",
    path: req.url,
    method: req.method
  });
});

export async function searchCentresByCity(city) {
  if (!city || city.trim() === "") {
    throw new Error("La ville est obligatoire");
  }

  return await searchByCity(city);
}

server.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
