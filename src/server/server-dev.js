require('regenerator-runtime/runtime');
require('dotenv').config();

import path from 'path';
import express from 'express';
import webpack from 'webpack';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import passport from 'passport';
import { urlencoded, json } from 'body-parser';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import nodemailer from 'nodemailer';

import config from '../../webpack.dev.config';
import { connectToDatabase } from './database/connection';
import { initialiseAuthentication } from './auth';

const app = express();
const compiler = webpack(config);

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());
app.use(cookieParser());
app.use(passport.initialize());

initialiseAuthentication(app);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.use(webpackHotMiddleware(compiler));

app.get('*', (_req, res, appNext) => {
  const indexFile = path.resolve(compiler.outputPath, 'index.html');

  compiler.outputFileSystem.readFile(indexFile, (err, result) => {
    if (err) {
      return appNext(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
    return 0;
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  console.log(`App listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.');

  await connectToDatabase();
});
