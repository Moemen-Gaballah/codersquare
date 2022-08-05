import express from 'express';

const app = express();

const posts = [];

app.get('/posts', (request, response) => {
    response.send('hello world');
});

app.listen(3000);
