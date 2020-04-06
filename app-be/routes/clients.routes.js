module.exports = app => {
  const clients = require("../controllers/clients.controller");

  //get all clients
  app.get("/clients", clients.findAll);

};
