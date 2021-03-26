const router = require('express').Router();
const userRoutes = require('./users');

// Post Routes
router.use('/users', userRoutes);

module.exports = router;
