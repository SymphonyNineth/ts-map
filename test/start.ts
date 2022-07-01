import { transform } from "ts-automap";
import { Frontend, API } from "./interfaces/shared";
const frontendData: Frontend = {
  name: "Anna",
  age: 23,
  numbers: [1, 2, 3],
  names: ["John", "Doe"],
  profession: {
    field: "Programming",
    level: "Junior",
  },
};

const backendData: API = {
  name: "Anna",
  names: ["John", "Doe"],
  bio: "Moldova",
  someField: "smth",
  profession: {
    field: "Programming",
    level: "Junior",
  },
  birthYear: 1023,
};

console.log(
  transform<Frontend, API>(frontendData, "API", {
    bio: (src, dest) => {
      dest.bio = "Developer" + src.age;
    },
    profession: (src, dest) => {
      dest.profession = {
        field: "Web",
        level: "Junior",
      };
    },
    birthYear: (src, dest) => {
      dest.birthYear = src.age;
    },
  })
);

console.log(
  transform<API, Frontend>(backendData, "Frontend", {
    age: (src, dest) => (dest.age = new Date().getFullYear() - src.birthYear),
    numbers: (src, dest) => (dest.numbers = [src.birthYear, src.birthYear - 22]),
  })
);
