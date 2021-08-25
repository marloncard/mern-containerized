import mongoose, { Connection } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';


export class dbConnection {
  conn:any;
  mongoServer:any;

  constructor(){
    this.conn;
    this.mongoServer;
  }
  /**
   * Connect to in-memory database
   */
  async connect () {
    this.mongoServer = await MongoMemoryServer.create();
    this.conn = await mongoose.connect(this.mongoServer.getUri(), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  /**
   * Remove all data for all db collections
   */
  async clearDatabase () {
    const collections = await mongoose.connection.db.collections()

    for (let collection of collections) {
      await collection.deleteMany({});
    }
  }
  /**
   * Close the connection and stop mongoServer
   */
  async close() {
    if (this.conn) await mongoose.connection.close();
    if (this.mongoServer) await this.mongoServer.stop();
  }
}