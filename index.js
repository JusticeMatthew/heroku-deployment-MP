const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use('/api/*', (_, res) => {
  res.json({ data: '👾 Here is my module project API 👾' });
});

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});
