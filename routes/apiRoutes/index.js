
const router = require('express').Router();

const notesRoutes = require('./notesRoutes.js');

router.use(notesRoutes);

module.exports = router;
