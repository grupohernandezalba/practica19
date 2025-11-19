const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('inicioView', { titulo: 'Raiz' });
});

router.get('/inicio', (req, res) => {
  res.render('inicioView', { titulo: 'Inicio' });
});

module.exports = router;
