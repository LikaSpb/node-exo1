const http = require("http");
const { shuffle } = require("./src/utils");
const hostname = "localhost";
const port = 8000;
require("dotenv").config();

const users = process.env.USERS.split(',');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    const userList = users.map((user) => `<li>${user}</li>`).join("");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Page d'accueil</title>
        </head>
        <body>
          <h1>Liste des utilisateurs</h1>
          <ul>${userList}</ul>
          <p><a href="/shuffle">Mélanger les utilisateurs</a></p>
        </body>
      </html>
    `);
  } else if (url === "/shuffle") {
    const shuffledUsers = shuffle(users);
    const userList = shuffledUsers.map((user) => `<li>${user}</li>`).join("");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Page de shuffle</title>
        </head>
        <body>
          <h1>Utilisateurs mélangés</h1>
          <ul>${userList}</ul>
          <p><a href="/">Retour à la liste des utilisateurs</a></p>
        </body>
      </html>
    `);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
