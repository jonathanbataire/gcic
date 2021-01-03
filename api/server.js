const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

routes(app);

app.listen(config.LISTEN_PORT, () => {
  console.log(`Server listening on port:${config.LISTEN_PORT}`);
});