/* eslint-disable no-unused-vars */
import { Team } from '../models/team';

export type TeamFilterQuery = {
  name: string;
  description: string;
  tags: string;
}

export interface ITeamService {
  create(data: Team): Promise<Team>;

  get(id: string): Promise<Team>;

  filter(query?: TeamFilterQuery): Promise<Team[]>;

  update(data: Team): Promise<Team>;

  delete(id: string): Promise<void>;
}
