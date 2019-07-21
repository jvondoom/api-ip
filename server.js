const express = require('express');
const properties = require('./config/properties');
const app = express();

app.get('/', (req, res) => {
  const ipAddr = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('x-hello-world', 'JvDM');
  res.end(
    JSON.stringify({
      ip: ipAddr,
    })
  );
});

app.get('/:name', (req, res) => {
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

app.listen(properties.PORT, (req, res) => {
  console.log(`Server is running on ${properties.PORT} port.`);
});
