export interface Contact {
  id: number;
  name: string;
  number: number;
  email: string;
}

export interface Store {
  contacts: Contact[];
}