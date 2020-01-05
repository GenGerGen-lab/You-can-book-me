import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
// import passport from 'passport';
// import cors from 'cors';
import config from '../../webpack.dev.config';

// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// const cluster = require('cluster');
// const numCPUs = require('os').cpus().length;

const app = express();
const compiler = webpack(config);

// let User = {};

// app.use(cors());
// app.use(passport.initialize());

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.use(webpackHotMiddleware(compiler));

// passport.serializeUser((profile, cb) => {
//   cb(null, profile);
// });

// passport.deserializeUser((profile, cb) => {
//   cb(null, profile);
// });

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID:
//         '35338009580-558jj7unib9h0a1brhl7d4bupn4li2qp.apps.googleusercontent.com',
//       clientSecret: '9NhglbsNx6CotAQTSlqykr54',
//       callbackURL: 'http://localhost/auth/google/callback'
//     },
//     function(_accessToken, _refreshToken, profile, done) {
//       User.findOrCreate({ googleId: profile.id }, function(err, user) {
//         return done(err, user);
//       });
//     }
//   )
// );

// app.get(
//   '/auth/google',
//   passport.authenticate('google', {
//     scope: ['email', 'profile']
//   })
// );

// app.get(
//   '/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(_req, res) {
//     res.redirect('/');
//   }
// );

// app.get('/user', (_req, res) => {
//   console.log('Get user data');
//   res.send(User);
// });

// app.get('/auth/logout', (_req, res) => {
//   User = {};
//   res.redirect('/');
// });

app.get('*', (_req, res, next) => {
  const indexFile = path.resolve(compiler.outputPath, 'index.html');

  compiler.outputFileSystem.readFile(indexFile, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
    return 0;
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.');
});

// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} is running`);

//   for (let i = 0; i < numCPUs; i += 1) {
//     cluster.fork();
//   }

//   cluster.on('exit', worker => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
// } else {
//   app.listen(PORT, () => {
//     console.log(`App listening to ${PORT}....`);
//     console.log('Press Ctrl+C to quit.');
//   });
// }
