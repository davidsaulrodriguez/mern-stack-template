const express = require('express');
const server = express();
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');

server.use(
  express.urlencoded({
    extended: true,
  })
);
server.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  server.use(express.static('client/build'));
}

// Add routes, both API and view
server.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mst', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// Start the API server
server.listen(PORT, (err) => {
  // eslint-disable-next-line no-console
  if (err) console.log(err);
  // eslint-disable-next-line no-console
  console.log(
    `Server is listening at: ${PORT} - Click Here => http://localhost:${PORT}`
  );
});
