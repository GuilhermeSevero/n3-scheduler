import { Inject } from 'dependency-injection-decorator';

import { ITeamsService } from '../../core/services';
import { Team } from '../../core/models/team';

export class TeamsController {
  @Inject('TeamsService')
  private teamsService!: ITeamsService;

  async getAllTeams(): Promise<Team[]> {
    return this.teamsService.filter();
  }
}
