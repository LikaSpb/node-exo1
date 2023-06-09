// Fais avec Maximilien
// P.S. on est tres fier de notre favicon

const http = require("http");
const fs = require("fs");
const url = require("url");
const hostname = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  if (path === "/") {
    const usersOptions = [
      "Alan",
      "Alice",
      "Sophie",
      "Sonia",
      "Antoine",
      "Bernard",
      "Clarisse",
    ]
      .map((user) => `<option value="${user.toLowerCase()}">${user}</option>`)
      .join("");

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Page d'accueil</title>
          <link rel="icon" href="/favicon.ico" type="image/x-icon">
        </head>
        <body>
          <header>
            <h1>Bienvenue sur notre API</h1>
          </header>
          <main>
            <p><a href="/all">Afficher tous les utilisateurs</a></p>

            <form action="/search" method="get">
              <label for="username">Rechercher un utilisateur :</label>
              <select id="username" name="username" required>
                ${usersOptions}
              </select>
              <button type="submit">Rechercher</button>
            </form>
          </main>
        </body>
      </html>
    `);
    return;
  }

  if (path === "/all") {
    fs.readFile("./Data/all.json", "utf8", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "File not found" }));
        return;
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    });
    return;
  }

  if (path === "/search") {
    const userName = parsedUrl.query.username.toLowerCase();
    fs.readFile(`./Data/${userName}.json`, "utf8", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "User not found" }));
        return;
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    });
    return;
  }

  if (path === "/favicon.ico") {
    fs.readFile("./favicon.ico", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "image/x-icon" });
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "image/x-icon" });
      res.end(data);
    });
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Route not found" }));
});

server.listen(port, hostname, () => {
  console.log(`Serveur en cours d'exÃ©cution sur http://${hostname}:${port}/`);
});
