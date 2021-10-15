import { ITeamService, TeamFilterQuery } from '..';
import { Team } from '../../models/team';

export class TeamService implements ITeamService {
  create(data: Team): Promise<Team> {
    console.log('🚀 ~ file: team.ts ~ line 6 ~ TeamService ~ create ~ data', data);
    throw new Error('Method not implemented.');
  }

  get(id: string): Promise<Team> {
    console.log('🚀 ~ file: team.ts ~ line 11 ~ TeamService ~ get ~ id', id);
    throw new Error('Method not implemented.');
  }

  filter(query?: TeamFilterQuery): Promise<Team[]> {
    console.log('🚀 ~ file: team.ts ~ line 16 ~ TeamService ~ filter ~ query', query);
    throw new Error('Method not implemented.');
  }

  update(data: Team): Promise<Team> {
    console.log('🚀 ~ file: team.ts ~ line 21 ~ TeamService ~ update ~ data', data);
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<void> {
    console.log('🚀 ~ file: team.ts ~ line 26 ~ TeamService ~ delete ~ id', id);
    throw new Error('Method not implemented.');
  }
}
