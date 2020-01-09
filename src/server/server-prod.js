require('babel-polyfill');
require('dotenv').config();

import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import { urlencoded, json } from 'body-parser';
import cors from 'cors';
import { connectToDatabase } from './database/connection';
import { initialiseAuthentication } from './auth';

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cookieParser());

app.use(cors());
app.use(passport.initialize());

app.use(express.static(DIST_DIR));

initialiseAuthentication(app);

app.get('*', (_req, res) => {
  res.sendFile(HTML_FILE);
});

const PORT = process.env.PORT || 8080;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork();
  }

  cluster.on('exit', worker => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  app.listen(PORT, async () => {
    console.log(`App listening to ${PORT}....`);
    console.log('Press Ctrl+C to quit.');

    await connectToDatabase();
  });
}
