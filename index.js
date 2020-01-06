
const { PORT, HOST } = require('./common/constants/server.constant');
const bodyParser = require('body-parser');
const express = require('express');

const userController = require('./controller/user/user.route');
const categoryController = require('./controller/category/category.route');
const biddingSessionController = require('./controller/biddingSession/bidding-session.route');

const app = express();
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('test'));

app.use('/users', userController);
app.use('/categories', categoryController);
app.use('/biddingsessions', biddingSessionController);
app.listen(PORT || 3000, HOST || '127.0.0.1', () => {
    console.log('Running...');
    
});