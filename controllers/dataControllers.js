const Data = require('../models/Data');

const getData = async (req, res, next) => {
  try {
    const data = await Data.find({});
    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getData,
};
