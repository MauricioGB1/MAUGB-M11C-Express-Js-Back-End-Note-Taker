const router = require('express').Router();
const noteRoutes = require('./notesRoutes');

router.use(notesRoutes);

module.exports = router;
