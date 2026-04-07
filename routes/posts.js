const express = require('express');
const router = express.Router();

const tagsController = require('../controllers/tagsController')

// Rotta bacheca index
router.get('/index', tagsController.index);

// Rotta bacheca show
router.get('/:id', tagsController.show);

// Rotta bacheca store  
router.post('/', tagsController.store);

// Rotta bacheca update
router.put('/:id', tagsController.update);

// Rotta bacheca modify
router.patch('/:id', tagsController.modify);

// Rotta bacheca destroy
router.delete('/:id', tagsController.destroy);

module.exports = router;
