const express = require('express');
const app = express();

const first = require('./Controllers/UserControllers');
const second = require('./Controllers/UserControllers');
require('dotenv').config();
const PORT = process.env.PORT || 1111;
app.use(express.json());

app.get('/',function (req, res)  {
    res.send('Hello World!');
})

app.post('/post',first);

app.get('/login',second)

app.listen(PORT, () => {
console.log(`Server is running on PORT ${PORT}`);
})