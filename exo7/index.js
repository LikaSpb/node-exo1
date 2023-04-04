const fs = require("fs");
const readline = require("readline");

const studentsData = JSON.parse(fs.readFileSync("./students.json")).students;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateAverage(notes) {
  const sum = notes.reduce((total, grade) => total + grade, 0);
  return sum / notes.length;
}

rl.setPrompt("Entrez le nom de l'étudiant pour voir sa moyenne > ");
rl.prompt();

rl.on("line", (line) => {
  const formattedInput = line.trim().toUpperCase();
  const student = studentsData.find(
    (student) => student.name.toUpperCase() === formattedInput
  );

  if (student) {
    const average = calculateAverage(student.notes);
    console.log(`La moyenne de ${student.name} est ${average.toFixed(2)}`);
  } else {
    console.log("Étudiant n'a pas été trouvé, réessayez.");
  }

  rl.prompt();
}).on("close", () => {
  console.log("Passez une bonne journée !");
  process.exit(0);
});
