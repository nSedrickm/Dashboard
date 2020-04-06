const clients = require ("../models/clients.model");

//get all clients from db
exports.findAll = (req, res) => {
  clients.getAll((err, data) => {
    if(err) {
      res.status(500).send({
        message: err.message || "error occured while retrieving clients"
      });
    }
      else res.send(data);
    });
  };
