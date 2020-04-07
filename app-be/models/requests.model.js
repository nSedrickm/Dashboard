const sql = require("./db.js");

//constructor
const requests = function (request) {
  this.id = request.__ID__,
  this.req_id = request.REQ_ID
  this.message = request.__MESSAGE__,
  this.phone_number = request.__PHONENUMBER__,
  this.date = request.__DATE__,
  this.status = request.__STATUS__
}

requests.getAll = result => {
  sql.query("SELECT * FROM __REQUEST__ ", (err, res) => {
    if (err) {
      console.log("error: ". err);
      result( null, err);
      return;
    }
     console.log("requests: ", res);
     result(null, res);
    });

}


module.exports = requests;
