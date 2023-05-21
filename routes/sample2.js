const express = require('express');

const sample2Controller = require('../controllers/sample2.js');

const router = express.Router();

// GET /feed/posts
router.get('/', sample2Controller.getAll);

router.get('/:id', sample2Controller.getSingle);

router.post('/', sample2Controller.createSample2);

router.put('/:id', sample2Controller.updateSample2);

router.delete('/:id', sample2Controller.deleteSample2);

// localhost:8080/contacts/
module.exports = router;
