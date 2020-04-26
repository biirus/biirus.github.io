require('./config');
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const navigation = require('./api/navigation');
const page = require('./api/page');

const app = express();
app.use(cors());
app.use(compression());

app.get('/api/navigation', navigation);
app.get('/api/page', page);

app.listen(process.env.PORT, () => {
  console.log(`🚀 API server is running on port ${process.env.PORT}`);
});