const jsonWebToken = require('jsonwebtoken');
const config = require('../config');

const cookieAge = config.EXP_COOKIE;
const tokenAge = config.EXP_TOKEN;
const tokenSecret = config.TOKEN_SECRET;
const issuer = config.ISSUER;

const cookieOptions = (httpOnly)=> ({ httpOnly, sameSite: 'strict', maxAge: cookieAge });

function generateToken (_id, role){
  const auth = jsonWebToken.sign({ session: _id, role: role }, tokenSecret,{issuer,expiresIn: tokenAge});
  const expToken = jsonWebToken.sign({ msg: 'You Animal!' }, tokenSecret,{issuer,expiresIn: tokenAge});
  return { auth, expToken };
}

exports.login = function (req, res){
  const {auth, expToken} = generateToken('uuid', 'role');
  res.cookie('auth', auth, cookieOptions(true));
  res.cookie('_xp', expToken, cookieOptions(false));
  res.json({name:'John Doe',role:'user' });
};

exports.signup = function (req, res){

};