import { transform, changePath } from "ts-automap";
import Source from "./interfaces/Source";
import Destination from "./interfaces/Destination";
changePath("interfaces");
const sourceData: Source = {
  name: "Anna",
  age: 23,
  numbers: [1, 2, 3],
  names: ["John", "Doe"],
  profession: {
    field: "Programming",
    level: "Junior",
  },
};

console.log(
  transform<Source, Destination>(sourceData, "Destination", {
    bio: (src, dest) => {
      dest.bio = "Developer";
    },
    profession: (src) => {
      src.profession = {
        field: "Web",
        level: "Junior",
      };
    },
    birthYear: (src, dest) => {
      dest.birthYear = src.age;
    },
  })
);
