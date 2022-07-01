export interface API {
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

export interface Frontend {
  name: string;
  age: number;
  numbers: number[];
  names: string[];
  profession: {
    field: string;
    level: string;
  };
}

export interface Works {
  works: boolean;
}
