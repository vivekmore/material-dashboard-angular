const express = require('express');
const app = express();

const forceSSL = function () {
  return function (req, res, next) {
    const host = req.get('Host');
    if (!host.startsWith('localhost:') && req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', host, req.url].join('')
      );
    }
    next();
  }
};

// Instruct the app to use the forceSSL middleware
app.use(forceSSL());

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
