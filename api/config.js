module.exports = {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/api',
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'kX6gGxg8BBeg7rZhKFA62a76EQKredcCG9CxSFQuWDRC6HBAbKXyUuPhZBA5SJdm',
  LISTEN_PORT: process.env.LISTEN_PORT || 3080,
  EXP_TOKEN: 60 * 30,
  EXP_COOKIE: 1000 * 60 * 30,
  ISSUER: 'abce925c-abdb-477a-8845-1dd0a6a363f1'
};