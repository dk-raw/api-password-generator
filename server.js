const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const current = new Date();
    const time = current.toLocaleTimeString("en-US");
    res.send(`time in the server: ${time}`);
});

const generateRouter = require('./routes/generate');
app.use('/generate', generateRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

