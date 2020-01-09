import { connect, connection } from 'mongoose';

const connectToDatabase = async () =>
  await connect(process.env.DB_CONNECTION_STRING || '', {
    useFindAndModify: false,
    autoIndex: false,
    poolSize: 10,
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

// reconnectTries: Number.MAX_VALUE,
// reconnectInterval: 500,

export { connectToDatabase, connection };
