"use strict";
exports.__esModule = true;
var ts_automap_1 = require("ts-automap");
var frontendData = {
    name: "Anna",
    age: 23,
    numbers: [1, 2, 3],
    names: ["John", "Doe"],
    profession: {
        field: "Programming",
        level: "Junior"
    }
};
var backendData = {
    name: "Anna",
    names: ["John", "Doe"],
    bio: "Moldova",
    someField: "smth",
    profession: {
        field: "Programming",
        level: "Junior"
    },
    birthYear: 1023
};
console.log((0, ts_automap_1.transform)(frontendData, "API", {
    bio: function (src, dest) {
        dest.bio = "Developer" + src.age;
    },
    profession: function (src, dest) {
        dest.profession = {
            field: "Web",
            level: "Junior"
        };
    },
    birthYear: function (src, dest) {
        dest.birthYear = src.age;
    }
}));
console.log((0, ts_automap_1.transform)(backendData, "Frontend", {
    age: function (src, dest) { return (dest.age = new Date().getFullYear() - src.birthYear); },
    numbers: function (src, dest) { return (dest.numbers = [src.birthYear, src.birthYear - 22]); }
}));
