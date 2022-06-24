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

// console.log(
//   transform<Source, Destination>(sourceData, "Destination", {
//     bio: (src: any) => {
//       src.bio = "Developer";
//       return src;
//     },
//     profession: (src: any) => {
//       src.bio = "Developer";
//       return src;
//     },
//     names: (src: any) => {
//       src.names = src.names.map((name: string) => name.toUpperCase());
//       return src;
//     },
//   })
// );

transform<Source, Destination>(sourceData, "Destination", {
  name: () => {},
  bio: () => {},
  profession: () => {},
});
