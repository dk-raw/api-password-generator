const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    const current = new Date();
    const time = current.toLocaleTimeString("en-US");
    res.send(`Time in the server: ${time}.<br />Generate Password: GET /generate/{password length}.<br /> GUI Version: https://password-generator-express.herokuapp.com/`);
});

const generateRouter = require('./routes/generate');
app.use('/generate', generateRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

