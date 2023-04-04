var readline = require("readline");

const students = ["Alan", "Sonia", "Sophie"];

rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt("Etudiant > ");
rl.prompt();

rl.on("line", function (line) {
  const student = line.trim().toLowerCase();
  if (students.map((s) => s.toLowerCase()).includes(student)) {
    console.log("L'étudiant a été trouvé !");
  } else {
    console.log("L'étudiant n'a pas été trouvé !");
  }
  rl.prompt();
}).on("close", function () {
  console.log("Have a great day !");
  process.exit(0);
});
