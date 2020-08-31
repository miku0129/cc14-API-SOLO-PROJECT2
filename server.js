//server setting
let express = require("express");
let bodyParser = require("body-parser");
// let port = process.env.PORT || 8000;
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

//database setting
const peoples = require("./db/data/peoplesData.json");

const setupServer = () => {
  let app = express();
  app.use(express.json());

  //GET get all name from peoplesData
  app.get("/api/peoples", (req, res) => {
    res.send(peoples);
  });

  // app.listen(port, function () {
  //   console.log("listening on port: ", port);
  // });

  //last line
  return app;
};

module.exports = { setupServer };
