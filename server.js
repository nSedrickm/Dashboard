const express =  require("express");
const bodyParser = require("body-parser");

const app = express();

//parse requests of content-type: applications/json
app.use(bodyParser.json());
//parse  requessts of content-type : application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true }));

app.get ("/" , (req, res) => {
  res.json({message: "backend is running"});
});

require("./app-be/routes/clients.routes")(app);

app.listen(3000, () => {
  console.log("server : runnning on port 3000");
});
