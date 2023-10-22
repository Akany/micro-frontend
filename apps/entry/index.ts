import proxy from 'express-http-proxy';
import express from 'express';

const app = express();

/**
 * Each service should be running in separated kub service.
 * Communication might be done over http protocol.
 *
 * Endpoints should come from a shared configuration.
 */
app.get('/page-a', proxy('http://localhost:3000/page-a'));

app.listen(8000, () => {
  console.log('Listening on port 8000');
});
