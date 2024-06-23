const express = require('express');
const app = express();
const port = 8081;

app.get('/', (req, res) => {
  res.send('Test CI/CD Pipeline!');
});

app.listen(port, () => {
  console.log(`App listening at on port:${port}`);
});
