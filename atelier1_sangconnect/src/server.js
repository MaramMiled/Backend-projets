import http from "node:http";
import { sendJson } from "./utils/http.js";

const port = 3000;

const server = http.createServer((req, res) => {

  console.log("Méthode :", req.method);
  console.log("URL :", req.url);

  if (req.url === "/" && req.method === "GET") {
  sendJson(res, 200, {
    message: "Bienvenue dans SangConnect",
    application: "Gestion des dons de sang"
  });

  return;
}

if (req.url === "/api/welcome" && req.method === "GET") {
  sendJson(res, 200, {
    message: "Bienvenue dans l’API SangConnect",
    description: "Gestion des dons de sang"
  });

  return;
}

if (req.url === "/api/version" && req.method === "GET") {
  sendJson(res, 200, {
    application: "SangConnect",
    apiVersion: "1.0.0",
    nodeVersion: process.version,
    environment: process.env.NODE_ENV || "development"
  });

  return;
}

  if (req.url === "/api/health" && req.method === "GET") {
  sendJson(res, 200, {
    status: "ok",
    application: "SangConnect",
    timestamp: new Date().toISOString(),
    nodeVersion: process.version
  });

  return;
}

  if (req.url === "/api/info" && req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8"
    });

    res.end("SangConnect - API de gestion des dons de sang");
    return;
  }

  if (req.url === "/api/info" && req.method === "GET") {
  sendJson(res, 200, {
    project: "SangConnect",
    apiVersion: "1.0.0",
    description: "API de gestion des dons de sang",
    environment: process.env.NODE_ENV || "development",
    nodeVersion: process.version
  });

  return;
}

if (req.url === "/api/diagnostic" && req.method === "GET") {
  sendJson(res, 200, {
    method: req.method,
    url: req.url,
    timestamp: new Date().toISOString(),
    headers: req.headers
  });

  return;
}

if (req.url === "/api/diagnostic") {
  sendJson(res, 405, {
    error: "Méthode HTTP non autorisée",
    message: "Cette route accepte uniquement la méthode GET",
    allowedMethods: ["GET"]
  });

  return;
}

sendJson(res, 404, {
  error: "Route non trouvée",
  path: req.url,
  method: req.method,
  timestamp: new Date().toISOString()
});

  res.end("Route non trouvée");
});

console.log(`Serveur démarré sur http://localhost:${port}`);

server.listen(port);