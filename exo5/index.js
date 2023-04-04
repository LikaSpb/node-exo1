const students = [
  { name: "ALAN", note: 11, address: "Paris", mention: null },
  { name: "ALICE", note: 17, address: "Paris", mention: null },
  { name: "SOHPHIE", note: 20, address: "Paris", mention: null },
  { name: "SONIA", note: 17, address: "Toulon", mention: null },
  { name: "ANTOINE", note: 18, address: "Aubenas", mention: null },
  { name: "BERNARD", note: 19, address: "Paris", mention: null },
  { name: "ALAN", note: 14, address: "Aubenas", mention: null },
  { name: "SONIA", note: 18, address: "Paris", mention: null },
  { name: "CLARISSE", note: 17, address: "Marseille", mention: null },
];

require("dotenv").config();

const mentionGoodEnough = process.env.MENTION_GOOD_ENOUGH;
const mentionGood = process.env.MENTION_GOOD;
const mentionVeryGood = process.env.MENTION_VERY_GOOD;

// Utilisez ces variables pour calculer les mentions des étudiants

students.forEach((student) => {
  if (student.note >= 12 && student.note < 14) {
    student.mention = mentionGoodEnough;
  } else if (student.note >= 14 && student.note < 16) {
    student.mention = mentionGood;
  } else if (student.note >= 16) {
    student.mention = mentionVeryGood;
  } else {
    student.mention = "Passable";
  }
});

console.log(students);
