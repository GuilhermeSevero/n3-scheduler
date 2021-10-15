import { Person } from './person';

export type Schedule = {
  startAt: Date;
  endAt: Date;
  channel: string;
  person: Person;
}
