import { cloneDeep } from "lodash";

export default function extract<T>(obj: T, arr: Array<keyof T>) {
  const clone = cloneDeep(obj);
  const newObj = {} as T;
  arr.forEach((key) => (newObj[key] = clone[key]));
  return newObj;
}
