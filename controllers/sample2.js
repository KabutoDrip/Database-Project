const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db('CSE-341-Database').collection('SampleData2').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('CSE-341-Database').collection('SampleData2').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createSample2 = async (req, res) => {
  const sample = {
    s2item2: req.body.item1,
    s2item2: req.body.item2,
    s2item3: req.body.item3,
    s2item4: req.body.item4
  };
  const response = await mongodb.getDb().db('CSE-341-Database').collection('SampleData2').insertOne(sample);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};

const updateSample2 = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const sample = {
    s2item1: req.body.item1,
    s2item2: req.body.item2,
    s2item3: req.body.item3,
    s2item4: req.body.item4
  };
  const response = await mongodb
    .getDb()
    .db('CSE-341-Database')
    .collection('SampleData2')
    .replaceOne({ _id: userId }, sample);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the first sample.');
  }
};

const deleteSample2 = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('CSE-341-Database').collection('SampleData2').deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createSample2,
  updateSample2,
  deleteSample2
};