const express = require('express');

const fs = require('fs');
const marked = require('marked');

const PORT = process.env.PORT || 4000;

const app = express();

app.get('/', (req, res) => {
  const path = __dirname + '/README.md';
  const file = fs.readFileSync(path, 'utf8');
  res.send(marked(file.toString()));
})

app.get('/ip', (req, res) => {
  const ipAddr = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('x-hello-world', 'JvDM');
  res.end(
    JSON.stringify({
      ip: ipAddr,
    })
  );
});

app.get('/ip:name', (req, res) => {
  const name = req.params.name;
  const ipAddr = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('x-hello-world', 'JvDM');
  res.end(
    JSON.stringify({
      ip: ipAddr,
      greeting: `Good to see you again, ${name}`,
    })
  );
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT} port.`);
});
