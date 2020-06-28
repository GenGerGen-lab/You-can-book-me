import nodemailer from 'nodemailer';
import { to } from 'await-to-js';

import { getUserByEmail, createUser } from '../../database/user';
import { signToken } from '../utils';

const strategy = app => {
  app.post('/createAccount', async (req, res) => {
    const [userErr, user] = await to(getUserByEmail(req.body.email));

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
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASS
      }
    });

    const mailOptions = {
      to: user.email,
      subject: 'Confirm registration to YouCanBook.me',
      text: `Hello
        
        Please verify your account by clicking the link: 
        http://${req.headers.host}/confirmation`,
      html: '<p>HTML version of the message</p>'
    };

    transporter.sendMail(mailOptions, err => {
      if (err) {
        return res.status(500).send({ msg: err.message });
      }
      return res
        .status(200)
        .send(`A verification email has been sent to ${user.email}.`);
    });
  });

  return app;
};

export { strategy };
