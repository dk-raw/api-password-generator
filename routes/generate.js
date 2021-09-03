const express = require('express');
const router = express.Router();
const generatePassword = (length) => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>,./?\|[]{};:`~"
    let password = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
}

router.get('/:length', (req, res) => {
    res.json({
        password: generatePassword(req.params.length),
        length: req.params.length
    });
});

module.exports = router;