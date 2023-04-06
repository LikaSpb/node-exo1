const http = require("http");
const pug = require("pug");
const path = require("path");

const port = 8000;

const loggedUser = {
  name: {
    first: "Jean",
    last: "Dupont",
  },
  age: 36,
  birthdate: new Date("1986-04-18"),
  location: {
    zipcode: "77420",
    city: "Champs-sur-Marne",
  },
  isAdmin: true,
};

const pugOptions = {
  filename: path.join("views", "template.pug"),
  pretty: true,
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    pugOptions.loggedUser = loggedUser;
    const userCardHTML = pug.renderFile(pugOptions.filename, pugOptions);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(userCardHTML);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Page not found</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
