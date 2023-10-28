'use strict';
 
const express = require('express');
 
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
 
// App
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/voting/burst/:target', (req, res) => {
  console.log(`Received POST request for /voting/burst/:target`);
  res.send({
    status: req.params.target,
    message: req.params.target === 'ON' ? 'Increasing cluster capacity' : 'Decreasing cluster capacity'
  })
});

app.post('/voting/games/:gameId/play-packages/:packageId/vote/:voteOption', (req, res) => {
  console.log(`Received POST request for /voting/games/:gameId/play-packages/:packageId/vote/:voteOption`);
  res.send({
    status: req.params.voteOption,
    message: `Vote Option ${req.params.voteOption} registered for package ${req.params.packageId} and game ${req.params.gameId}`
  })
});

app.post('/voting/capture-votes', (req, res) => {
  console.log(`Received POST request for /voting/capture-votes`);
  console.log(req.body);
  res.send({
    status: 'Status captured'
  })
});

app.get('/voting/games/:gameId/my-votes/:userId', (req, res) => {
  console.log(`Received POST request for /voting/games/:gameId/my-votes/:userId`);
  res.send(require(`./votes${req.params.userId}.json`));
});

app.get('/voting/games/:gameId/top-votes', (req, res) => {
  console.log(`Received POST request for /voting/games/:gameId/top-votes`);
  res.send(require(`./top-votes.json`));
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});