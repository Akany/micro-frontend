import express from 'express';
import { render } from '../middleware/render';
const app = express();

app.get('/page-a', render);

app.use(express.static(__dirname));

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`);
  })