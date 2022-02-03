export interface Contact {
  id: number;
  name: string;
  number: number;
}

export interface Store {
  contacts: Contact[];
}