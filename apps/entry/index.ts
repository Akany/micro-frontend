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
/**
 * Page B service might be Auth required
 * Entry proxy would be responsible for route guards.
 * Also, it should prepare and share context for every service.
 */
app.get('/page-b', proxy('http://localhost:3001/page-b'));

app.listen(8000, () => {
  console.log('Listening on port 8000');
});
