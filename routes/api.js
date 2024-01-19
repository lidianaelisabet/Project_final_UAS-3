// import CovidController
const CovidController = require('../controllers/CovidController');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to Covid API');
});

// Covid routes
router.get('/covids', CovidController.index);
router.post('/covids', CovidController.store);
router.put('/covids/:id', CovidController.update);
router.delete('/covids/:id', CovidController.destroy);

// export router
module.exports = router;