const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.json({ mensaje: "Lista de usuarios" });
});

module.exports = router;