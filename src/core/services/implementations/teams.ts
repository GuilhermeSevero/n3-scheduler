import { Injectable } from 'dependency-injection-decorator';

import { ITeamsService, TeamFilterQuery } from '..';
import { Team } from '../../models/team';

@Injectable()
export class TeamsService implements ITeamsService {
  async create(data: Team): Promise<Team> {
    console.log('🚀 ~ file: team.ts ~ line 6 ~ TeamService ~ create ~ data', data);
    throw new Error('Method not implemented.');
  }

  async get(id: string): Promise<Team> {
    console.log('🚀 ~ file: team.ts ~ line 11 ~ TeamService ~ get ~ id', id);
    throw new Error('Method not implemented.');
  }

  async filter(query?: TeamFilterQuery): Promise<Team[]> {
    console.log('🚀 ~ file: team.ts ~ line 16 ~ TeamService ~ filter ~ query', query);
    throw new Error('Method not implemented.');
  }

  async update(data: Team): Promise<Team> {
    console.log('🚀 ~ file: team.ts ~ line 21 ~ TeamService ~ update ~ data', data);
    throw new Error('Method not implemented.');
  }

  async delete(id: string): Promise<void> {
    console.log('🚀 ~ file: team.ts ~ line 26 ~ TeamService ~ delete ~ id', id);
    throw new Error('Method not implemented.');
  }
}
