/* eslint-disable no-unused-vars */
import { Schedule } from '../models/schedule';

export interface ISchedulerService {
  execute(teamId: string): Promise<Schedule>;

  get(teamId: string): Promise<Schedule>;
}
