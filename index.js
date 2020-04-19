const express = require('express');
const app = express();

if (process.env.NODE_ENV === 'production') {
  //Express will serve up the production assets
  app.use(express.static(__dirname + '/client/build'));
  //Express will serve up the index.html if
  //it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
