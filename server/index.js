const { syncAndSeed } = require('./db');
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/public',express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'))
});

app.use('/api', require('./api'));

const init = () => {
  try {
    syncAndSeed();
    console.log('synd and seed success!')
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    })
  }
  catch(err) {
    console.log(err)
  }
}

init();

module.exports = app;

