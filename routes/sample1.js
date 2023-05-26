const express = require('express');

const sample1Controller = require('../controllers/sample1.js');

const router = express.Router();

const validation = require('../middleware/validate');

// GET /feed/posts
router.get('/', sample1Controller.getAll);

router.get('/:id', sample1Controller.getSingle);

router.post('/', validation.saveSample, sample1Controller.createSample1);

router.put('/:id', validation.saveSample, sample1Controller.updateSample1);

router.delete('/:id', sample1Controller.deleteSample1);

// localhost:3001/contacts/
module.exports = router;
