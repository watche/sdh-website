import {handler} from './build/handler.js';
import express from 'express';
import fs from 'fs';
import http from 'http';
import https from 'https';
import config from './server-config.json' assert {type:'json'};

// Warning! `require`d files get cached. Remember that when trying to update these.
const privateKey = fs.readFileSync(config.privateKey, 'utf8');
const certificate = fs.readFileSync(config.credentials, 'utf8');
const credentials = {
  key: privateKey,
  cert: certificate
};

const httpApp = express();
const PORT = 80;
const httpServer = http.createServer(httpApp);
httpServer.listen(PORT, () => {
  console.log("HTTP Server started for SDH Website.");
});
httpApp.get('*', function(req, res) {
  res.redirect('https://' + req.headers.host + req.url);
});

const httpsApp = express();
const SSLPORT = 443;
const httpsServer = https.createServer(credentials, httpsApp);
httpsServer.listen(SSLPORT, () => {
  console.log("HTTPS Server started for SDH Website.");
});
httpsApp.use(handler);
