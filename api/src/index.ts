import { Server } from './server';

const serverInst: Server = Server.bootstrap(false);

serverInst.start();

['SIGINT', 'SIGTERM', 'SIGQUIT'].forEach((signal) => {
  process.on(signal, () => {
    serverInst.stop(signal);
    process.exit();
  });
});