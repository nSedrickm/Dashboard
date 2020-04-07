const requests = require ("../models/requests.model");

//get all clients from db
exports.findAll = (req, res) => {
 requests.getAll((err, data) => {
    if(err) {
      res.status(500).send({
        message: err.message || "error occured while retrieving requests"
      });
    }
      else res.send(data);
    });
  };
