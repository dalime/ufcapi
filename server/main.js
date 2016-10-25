const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/twd';

// PACKAGE REQUIRES
const bodyParser = require('body-parser'); // used to parse req.body
const cookieParser = require('cookie-parser'); // used to parse any cookies
const express = require('express'); // to use express framework
const morgan = require('morgan'); // express logger
const path = require('path'); // to declare absolute file paths easier

// DB CONNECT
require('mongoose').connect(MONGO_URI, err => {
  if (err) throw err;
  console.log(`MongoDB is connected to the database ${MONGO_URI}`);
});

// APP DECLARATION
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './build')));
} else {
  // WEBPACK CONFIG
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.dev');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpack(config.output.publicPath)
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

// GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// ROUTES
app.use('/api', require('./routes/api'));

app.get('*', (req, res) => {
  let indexPath = path.join(__dirname, './index.html');
  res.sendFile(indexPath);
});

// SERVER LISTEN
app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Server listening on port #${PORT}`);
});
