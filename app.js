const express = require('express');
const cors = require('cors');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(process.env.PORT || 3000);
