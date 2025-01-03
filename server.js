const express = require('express');
const app = express();
const port = 3000;

// Middleware để parse JSON
app.use(express.json());

// Định nghĩa một route đơn giản
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/products', (req, res) => {
    res.send('These are products');
});


app.get('/ping', (req, res) => {
    res.send('pong');
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});