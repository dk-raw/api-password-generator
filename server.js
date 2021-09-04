const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const current = new Date();
    const time = current.toLocaleTimeString("en-US");
    res.send(`Time in the server: ${time}. <br />
        To generater a pasword, GET /generate/{password length}. <br /> GUI version: https://password-generator-express.herokuapp.com/`);
});

const generateRouter = require('./routes/generate');
app.use('/generate', generateRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

