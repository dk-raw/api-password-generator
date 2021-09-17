const express = require('express');
const router = express.Router();
const MAX_LENGTH = 99999;
const MIN_LENGTH = 2;

const generatePassword = (length) => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>,./?\|[]{};:`~"
    let password = '';
    for (let i = 0; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}

router.get('/:length', (req, res) => {
    if (isNaN(req.params.length) || req.params.length < MIN_LENGTH || req.params.length > MAX_LENGTH || (Math.floor(req.params.length) != req.params.length)) {
        res.status(400).send(`Bad Request: length value ${req.params.length} is invalid.`);
    } else {
        res.json({
            password: generatePassword(parseFloat(req.params.length)),
            length: parseFloat(req.params.length)
        });
    }
});

module.exports = router;