import passport from 'passport';
import passportGoogle from 'passport-google-oauth';
import { to } from 'await-to-js';

import { getUserByProviderId, createUser } from '../../database/user';
import { signToken } from '../utils';

const GoogleStrategy = passportGoogle.OAuth2Strategy;

const strategy = app => {
  const strategyOptions = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.SERVER_API_URL}/auth/google/callback`
  };

  const verifyCallback = async (_accessToken, _refreshToken, profile, done) => {
    const [err, user] = await to(getUserByProviderId(profile.id));

    if (err || user) {
      return done(err, user);
    }

    const verifiedEmail =
      profile.emails.find(email => email.verified) || profile.emails[0];

    const [createdError, createdUser] = await to(
      createUser({
        provider: profile.provider,
        providerId: profile.id,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        displayName: profile.displayName,
        email: verifiedEmail.value,
        password: null
      })
    );

    return done(createdError, createdUser);
  };

  passport.use(new GoogleStrategy(strategyOptions, verifyCallback));

  app.get(
    `${process.env.BASE_API_URL}/auth/google`,
    passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/calendar.events',
        'https://www.googleapis.com/auth/calendar.readonly'
      ]
    })
  );

  app.get(
    `${process.env.BASE_API_URL}/auth/google/callback`,
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
      return res
        .status(200)
        .cookie('jwt', signToken(req.user), {
          httpOnly: true
        })
        .redirect('/');
    }
  );

  app.get('/user', (_req, res) => {
    res.send(JSON.stringify('Hello'));
    res.end();
  });

  return app;
};

export { strategy };
