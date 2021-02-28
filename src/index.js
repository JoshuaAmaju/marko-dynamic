import 'marko/express';
import express from 'express';
import serveStatic from 'serve-static';

import HomePage from './pages/home';
import DetailsPage from './pages/details';

const app = express ();
const port = process.env.PORT || 8080;

// Enable gzip compression for all HTTP responses
// app.use (compression ());

// app.use (markoExpress ());

// Allow all of the generated files to be served up by Express
app.use ('/static', serveStatic ('dist/client'));

// Initialize mock service routes
// initServices(app);

// Map the "/" route to the home page
app.get ('/', HomePage);
app.get ('/photo/:id', DetailsPage);

// Start the server
app.listen (port, err => {
  if (err) {
    throw err;
  }

  if (port !== '0') {
    console.log (`Listening on port ${port}`);
  }
});
