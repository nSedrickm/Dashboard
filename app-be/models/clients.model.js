const sql = require("./db.js");

//constructor
const clients = function (client) {
  this.id = client.ID,
  this.token = client.TOKEN,
  this.date  = client.DATE
}

clients.getAll = result => {
  sql.query("SELECT * FROM __CLIENTS__ ", (err, res) => {
    if (err) {
      console.log("error: ". err);
      result( null, err);
      return;
    }
     console.log("clients: ", res);
     result(null, res);
    });

}


module.exports = clients;
