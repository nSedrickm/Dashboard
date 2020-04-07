module.exports = app => {
  const clients = require("../controllers/clients.controller");
  const requests = require("../controllers/requests.controller");

  //get all clients
  app.get("/clients", clients.findAll);
  // get all requests
  app.get("/requests",requests.findAll);

};
