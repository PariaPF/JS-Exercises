const students = [
  { name: `Alice`, grades: [85, 90, 92] },
  { name: `Bob`, grades: [75, 80, 85] },
];

const average = students.reduce(averageFunc, 0);
