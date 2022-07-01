import { Project } from "ts-morph";
import * as root from "app-root-dir";
// import { E } from "./E";
// let path = "/";
// function changePath(newPath: string) {
//   path = newPath;
// }

// const getKeys = (fileName: string, interfaceName: string): string[] => {
//   const project = new Project();
//   const sourceFile = project.addSourceFileAtPath(`./${path}/${fileName}.ts`);
//   const node = sourceFile.getInterface(interfaceName)!;
//   const referencedSymbols = node.findReferences();
//   for (const referencedSymbol of referencedSymbols) {
//     for (const reference of referencedSymbol.getReferences()) {
//       // console.log("File path: " + reference.getSourceFile().getFilePath());
//     }
//   }

//   const allKeys = node.getProperties().map((p) => p.getName());
//   return allKeys;
// };
// changePath("./interfaces");

// console.log(getKeys("shared", "Works"));
// export { getKeys, changePath };
// const project = new Project();
// const nodes = project.addSourceFilesAtPaths(`**/*.ts`);
// const intN = "Source";
// for (const node of Object.values(nodes)) {
//   const entity = node.getInterface(intN);
//   if (entity) {
//     const allKeys = entity.getProperties().map((p) => p.getName());
//     console.log(allKeys);
//     break;
//   }
// }

// console.log(root.get());
