import extract from "./extract";
import { getKeys } from "./keys";

type ForMembers<D, S> = {
  [Key in keyof D]: (arg: S) => void;
};

export default function transform<S extends { [index: string]: any }, D extends { [index: string]: any }>(
  source: S,
  interfaceName: string,
  forMembers?: ForMembers<D, S>
): D {
  const newObj = extract(source, getKeys(interfaceName));
  if (forMembers) {
    Object.keys(forMembers).forEach((key: keyof typeof forMembers) => forMembers[key](newObj));
  }
  return newObj as unknown as D;
}

// interface ForMembers {
//   [index: string]: (arg: object) => object;
// }
// export default function transform<S extends {
//   [index: string]: any;
// }, D extends {
//   [index: string]: any;
// }>(source: S, interfaceName: string, forMembers?: ForMembers): D;
// export {};
