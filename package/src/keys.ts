import { Project } from "ts-morph";
let path = "/";
function changePath(newPath: string) {
  path = newPath;
}

const getKeys = (intName: string): string[] => {
  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(`./${path}/${intName}.ts`);
  const node = sourceFile.getInterface(intName)!;
  const allKeys = node.getProperties().map((p) => p.getName());
  return allKeys;
};
export { getKeys, changePath };
