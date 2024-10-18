const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้

studentsScoreMoreThan50 = students
  .filter((scores) => scores.score >= 50)
  .map((scores) => scores.score * 1.1)
  .reduce((acc, cur) => acc + cur);
console.log(`Total score is ${studentsScoreMoreThan50}`);
