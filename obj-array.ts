// const person: {name: string, age: number} = {

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // Tuple
// } = {
//   name: "Mridul",
//   age: 26,
//   hobbies: ["sports", "cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 5,
  READ_ONLY = "Read",
  AUTHOR = "Author",
}

const person = {
  name: "Mridul",
  age: 26,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, "admin", ""] not supported as only 2 values are specified. but this doesn't apply to push

let favouriteActivies: string[];

favouriteActivies = ["sports"];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
// for in for objects and for of for iterable objects like array

if (person.role === Role.AUTHOR) {
  console.log("is admin");
}
