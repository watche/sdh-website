// Depends on the following iptables commands:
/*
iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 28982
iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 23127
*/
// The port names are not meaningful.
//
// Also, to run with user privileges, the private key and certificate chain permissions must allow the script to read them.
// TODO: Dockerize
const HTTP_PORT = 28982;
const HTTPS_PORT = 23127;

import { handler } from './build/handler.js';
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
const httpServer = http.createServer(httpApp);
httpServer.listen(HTTP_PORT, () => {
  console.log(`HTTP Server started for SDH Website. (Listening on port ${HTTP_PORT}.)`);
});
httpApp.get('*', function(req, res) {
  res.redirect('https://' + req.headers.host + req.url);
});

const httpsApp = express();
const httpsServer = https.createServer(credentials, httpsApp);
httpsServer.listen(HTTPS_PORT, () => {
  console.log(`HTTPS Server started for SDH Website. (Listening on port ${HTTPS_PORT}.)`);
});
httpsApp.use(handler);
