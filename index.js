const express = require('express')
const bodyParser = require('body-parser');

const app = express()

require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRouter = require('./routers/user.route');
const boardsRoute = require('./routers/boards.route');
const columnsRoute = require('./routers/columns.route');
const cardsRoute = require('./routers/cards.route');
const commentsRoute = require('./routers/comments.route');
const notificationsRoute = require('./routers/notifications.route');

app.use('/users', userRouter);
app.use('/boards', boardsRoute);
app.use('/columns', columnsRoute);
app.use('/cards', cardsRoute);
app.use('/comments', commentsRoute);
app.use('/notifications', notificationsRoute);

app.listen(3000, () => console.log("App listening on PORT 3000"))