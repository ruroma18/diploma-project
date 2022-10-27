const express = require('express');
const http = require('http');
const cors = require('cors');
const router = require('./routers');
const CONSTANTS = require('./constants');
const { tokenErrorHandler, basicErrorHandler } = require('./middleware/errorHandler');

const app = express();

PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use('/images', express.static(CONSTANTS.imgPath));
app.use('/files', express.static(CONSTANTS.filePath));
app.use('/api', router);
app.use(tokenErrorHandler);
app.use(basicErrorHandler);

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server started at ${PORT} port`));