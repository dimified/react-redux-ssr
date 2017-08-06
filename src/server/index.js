import express from 'express';
import { join } from 'path';

// Use bundled server side rendering
const render = require('./ssr.js');
const app = express();
const port = 9000;

app.use('/styles.css', express.static(join(__dirname, 'styles.css')));
app.use('/app.js', express.static(join(__dirname, 'app.js')));

// Root path renders application on the server per default
app.get('/', render.default);

app.listen(port);
console.log(`Listening on port ${port}`);
