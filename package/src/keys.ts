import { Project } from "ts-morph";
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
  return allKeys;
};
export { getKeys };
