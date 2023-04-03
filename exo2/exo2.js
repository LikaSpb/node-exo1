const fs = require("fs");

// Ajouter les étudiants
fs.appendFileSync("students.txt", "\n18 SONIA Paris\n17 CLARISSE Marseille");

try {
  const data = fs.readFileSync("students.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error(err);
}

fs.readFile("students.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const students = [];

  const lines = data.split("\n");
  lines.forEach((line) => {
    if (line) {
      const [grade, name] = line.split(" ");
      const parsedGrade = parseFloat(grade);
      const uppercaseName = name.toUpperCase(); // mettre chaque nom en majuscule
      if (parsedGrade > 17) {
        students.push({ name: uppercaseName, grade: parsedGrade });
      }
    }
  });

  students.sort((a, b) => b.grade - a.grade);

  console.log(students);

  const bestStudent = students.reduce((prev, curr) => {
    return prev.grade > curr.grade ? prev : curr;
  });
  console.log(`Le meilleur étudiant : ${bestStudent.name}`);
});
