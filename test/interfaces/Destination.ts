export default interface Destination {
  name: string;
  bio: string;
  someField: string;
  names: string[];
  profession: {
    field: string;
    level: string;
  };
  birthYear: number;
}
