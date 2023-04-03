// EXO 2
const fs = require("fs");

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
      if (parsedGrade > 17) {
        students.push({ name, grade: parsedGrade });
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
