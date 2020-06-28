require('regenerator-runtime/runtime');
require('dotenv').config();

import path from 'path';
import express from 'express';
import webpack from 'webpack';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import passport from 'passport';
import nodemailer from 'nodemailer';
import { to } from 'await-to-js';
import { urlencoded, json } from 'body-parser';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import { getUserByEmail } from './database/user';
import config from '../../webpack.dev.config';
import { connectToDatabase } from './database/connection';
import { initialiseAuthentication } from './auth';

import { strategy as EmailStrategy } from './auth/strategies/email';

const app = express();
const compiler = webpack(config);

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());
app.use(cookieParser());
app.use(passport.initialize());
EmailStrategy(app);

initialiseAuthentication(app);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.use(webpackHotMiddleware(compiler));

app.post('/emailVerification', async (req, res) => {
  const email = req.body.value;
  const [userErr, user] = await to(getUserByEmail(email));

  if (userErr) {
    return res.status(400).send({
      msg: 'Error.'
    });
  } else if (user) {
    return res.status(400).send({
      msg:
        'The email address you have entered is already associated with another account.'
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'youcanbookmee@gmail.com',
      pass: 'sasha86765195'
    }
  });

  const mailOptions = {
    to: email,
    subject: 'Confirm registration to YouCanBook.me',
    html: `
        <div style="position: relative; width: 100%; min-height: 150px; box-sizing: border-box; padding: 10px; background-color: #F1F1F1">
          <div style="max-width:550px; width: 98%; min-height: 450px; font-size: 16px; margin-left: 1%; position: relative; color: #555; background-color: #FFF; box-sizing: border-box; padding: 20px;  border: 1px solid #ccc">
            <img src="cid:logo" width="200px" style="margin: 10px 0" alt="YouCanBook.me" />
            <h2 style="color: #333; font-size: 22px; font-weight: 400;">You're almost here</h2>
            <p>Hello,</p>
            <p>We're excited to have you on board! You're just a few steps away from setting up your first
            booking page. All that's left to do is verify your email address and set a password.</p>
            <a href="http://${req.headers.host}/createAccount" style="display: inline-block; text-decoration: none; width: 100%; height: 40px; text-align: center; line-height: 40px; background-color: #2E7298; font-size: 18px; box-sizing: border-box; border-radius: 5px; color: #FFF">Verify email and get started</a>
            <p>This link is valid for <strong>24 hours</strong>.</p>
            <p>All the best,<br/>
            The YouCanBook.me team</p>
          </div>
        </div>
    `,
    attachments: [
      {
        filename: '352695f685e6608798df05c5da32a655.png',
        path: path.join(__dirname, '/352695f685e6608798df05c5da32a655.png'),
        cid: 'logo'
      }
    ]
  };

  transporter.sendMail(mailOptions, err => {
    if (err) {
      console.log(err.message);
      return res.status(500).send({ msg: err.message });
    }
    return res
      .status(200)
      .send(`A verification email has been sent to ${email}.`);
  });
  return res.status(200);
});

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
