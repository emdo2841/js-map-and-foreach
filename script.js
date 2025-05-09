const student = [
  {
    name: "John Doe",
    age: 20,
    score: 85,
    courses: ["Maths", "English", "computer"],
  },
  {
    name: "Jane Smith",
    age: 22,
    score: 90,
    courses: ["Maths", "English", "Physic"],
  },
  {
    name: "Sam Brown",
    age: 19,
    score: 78,
    courses: ["Maths", "English", "Geograpy"],
  },
  {
    name: "Emily Davis",
    age: 21,
    score: 95,
    courses: ["Maths", "English", "computer"],
  },
  {
    name: "Michael Johnson",
    age: 23,
    score: 88,
    courses: ["Maths", "English", "Biology"],
  },
];
// const { name, age, score, courses } = student[0];
// console.log(name,age,score,courses);
student.forEach((student) => {
  const { name, age, score, courses } = student; //destructing
  console.log(
    `${name} is ${age} years old and scored ${score}. He is taking ${courses.join(
      ", "
    )}`
  );
});
const studentDescriptions = student.map(({ name, age, score, courses }) => {
  return `${name} is ${age} years old, scored ${score}, and is enrolled in ${courses.join(
    ", "
  )}.`;
});

console.log(studentDescriptions);
