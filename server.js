const express =  require("express");
const bodyParser = require("body-parser");

const app = express();
// fixes cors issues
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//parse requests of content-type: applications/json
app.use(bodyParser.json());
//parse  requessts of content-type : application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true }));

app.get ("/" , (req, res) => {
  res.json({message: "app-be is running"});
});

require("./app-be/routes/routes")(app);

app.listen(3000, () => {
  console.log("server : runnning on port 3000");
});
