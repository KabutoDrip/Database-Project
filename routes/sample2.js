const express = require('express');

const sample2Controller = require('../controllers/sample2.js');

const router = express.Router();

const validation = require('../middleware/validate');

// GET /feed/posts
router.get('/', sample2Controller.getAll);

router.get('/:id', sample2Controller.getSingle);

router.post('/', validation.saveSample, sample2Controller.createSample2);

router.put('/:id', validation.saveSample, sample2Controller.updateSample2);

router.delete('/:id', sample2Controller.deleteSample2);

// localhost:3001/contacts/
module.exports = router;
