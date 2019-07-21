const express = require('express');
const properties = require('./config/properties');
const app = express();

app.listen(properties.PORT, (req, res) => {
  console.log(`Server is running on ${properties.PORT} port.`);
});
