import mongoose from 'mongoose';

// Connect to "mongo" service running in container
const connection = "mongodb://mongo:27017/mongo-db";

export const connectDb = () => {
  try {
    return mongoose.connect(connection, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  } catch(err) { console.error(err); }
}

export const closeDbConn = () => {
  try {
    mongoose.connection.close()
  } catch (err) {
    console.error(err);
  }
}