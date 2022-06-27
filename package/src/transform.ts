import extract from "./extract";
import { getKeys } from "./keys";

type ForMembers<D, S> = {
  [Key in keyof D]: (source: S, destination: D) => void;
};

export default function transform<S extends { [index: string]: any }, D extends { [index: string]: any }>(
  source: S,
  interfaceName: string,
  forMembers?: Partial<ForMembers<D, S>>
): D {
  const newObj = extract(source, getKeys(interfaceName));
  if (forMembers) {
    Object.keys(forMembers).forEach((key: keyof typeof forMembers) => forMembers[key]?.(source, newObj as unknown as D));
  }
  return newObj as unknown as D;
}
