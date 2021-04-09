import express from 'express';
import http from 'http';
import cors from 'cors';

import { connectDb, closeDbConn } from './db';
import { errorHandler, handle404 } from './middleware/errorHandlers';
import UserRouter from './routers/user';

/**
 * Server
 * 
 * @class Server
 */
export class Server {

  public app: express.Application;
  public httpServer!: http.Server;

  public static bootstrap(): Server {
    return new Server();
  }
  
  constructor() {

    // Create express application
    this.app = express();

    // Configure the application
    this.config();

    connectDb()?.then(() => { console.log("Connected to Mongo!"); });

    const baseRouter = express.Router();

    // API routes
    baseRouter.use('/users', UserRouter);


    this.app.use('/', baseRouter);
    
    // Add catch routes
    this.errorHandling();
  }

  /**
   * 
   * @class Server
   * @method start
   */
  public start() {
    // Start the server
    return Promise.resolve()
    .then(() => {
      console.log('Start express server with configuration:', {

      });
      const PORT = 8080;
      console.info(`⚡️[server]: Server is running at https://localhost:${PORT}`);
      this.httpServer = this.app.listen(process.env.PORT || PORT)
      return this.httpServer;
    });
  }
  
  /**
   * 
   * @class Server
   * @method stop
   */
  public stop(signal: any) {
    // Stop the server
    closeDbConn();
    this.httpServer.close();
    console.info(`🛑[server] recieved ${signal}. Shutting down.`);
  }

  private config() {
    // Add configuration here

    // Handle CORS
    const corsRef = cors();
    this.app.use(corsRef);

    // Parse incoming request bodies
    this.app.use(express.json());
  }
  /**
   * @class Server
   * @method errorHandling
   */
  private errorHandling() {
    // Error Handling
    this.app.use(errorHandler);
    // Must be called last
    this.app.use(handle404);
  }
}