const express = require('express');
const cors = require('cors');
const path = require("path")
const routes = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json());

const corsOptions = {
  origin: ['https://suleman-notes-app.netlify.app'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use('/', routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
