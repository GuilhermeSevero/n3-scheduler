import { initApp } from './presentation/app';
import { initCore } from './core';
import { initInfra } from './infra';

const signalTraps: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGUSR2', 'SIGHUP'];

const start = async (): Promise<void> => {
  try {
    await initInfra();
    await initCore();
    await initApp();
  } catch (error) {
    console.error('An error occurred while initializing the application:', error);
    process.exit(1);
  }
};

signalTraps.forEach((type): void => {
  process.once(type, async (): Promise<void> => {
    try {
      console.info('Caught interrupt signal');
    } finally {
      process.kill(process.pid, type);
    }
  });
});

start();
