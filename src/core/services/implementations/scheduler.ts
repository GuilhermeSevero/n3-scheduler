import { Schedule } from '../../models/schedule';
import { ISchedulerService } from '../scheduler';

export class SchedulerService implements ISchedulerService {
  execute(teamId: string): Promise<Schedule> {
    console.log('🚀 ~ file: scheduler.ts ~ line 6 ~ SchedulerService ~ execute ~ teamId', teamId);
    throw new Error('Method not implemented.');
  }

  get(teamId: string): Promise<Schedule> {
    console.log('🚀 ~ file: scheduler.ts ~ line 10 ~ SchedulerService ~ get ~ teamId', teamId);
    throw new Error('Method not implemented.');
  }
}
