const express = require('express')
const path = require(`path`)

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express()

app.set(`view engine`, `hbs`);
app.set('views', path.join(__dirname, 'views'));

const port = 3000

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const end = Date.now() - start;
    console.log(`${req.method} ${req.url} ${end}ms`);
});

app.use('/site', express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {
        caption: 'friends',
    });
});

app.use(`/friends`, friendsRouter);
app.use('/messages', messagesRouter);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
    console.log("Press Ctrl+C to stop server")
})