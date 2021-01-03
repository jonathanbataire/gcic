const Auth = require('./controllers/auth');
const Home = require('./controllers/home');
const config = require('./config');
const jwt = require('express-jwt');

const tokenSecret = config.TOKEN_SECRET;
const issuer = config.ISSUER;

const authExpToken  = jwt({ 
  secret: tokenSecret, 
  algorithms: ['HS256'], 
  getToken: req => req.cookies._xp,
  issuer: issuer
});

const authToken = jwt({ 
  secret: tokenSecret, 
  algorithms: ['HS256'], 
  getToken: req => req.cookies.auth,
  issuer: issuer
});
const errorUnauthorized = function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send({msg:'Unauthorized Access'});
  }
};

module.exports = function (app){
  app.use(authToken.unless({path:'/login'}));
  app.use(authExpToken.unless({path:'/login'}));
  app.use(errorUnauthorized);

  app.post('/login',Auth.login);
  app.get('/home', Home.hello);
};