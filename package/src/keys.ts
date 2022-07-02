import { Project } from "ts-morph";
import * as fs from "fs";
const getKeys = (intName: string): string[] => {
  const project = new Project();
  const nodes = project.addSourceFilesAtPaths(`**/*.ts`);
  let allKeys;
  for (const node of Object.values(nodes)) {
    const interfc = node.getInterface(intName);
    if (interfc) {
      allKeys = interfc.getProperties().map((p) => p.getName());
      break;
    }
  }
  if (!allKeys) {
    throw new Error(`Interface ${intName} was not found at`);
  }

  fs.writeFile(`./_object_${intName}.js`, JSON.stringify(allKeys), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log(`"The file was saved!"`);
  });

  return allKeys;
};
export { getKeys };
