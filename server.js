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

  //GET: get all name from peoplesData
  app.get("/api/peoples", (req, res) => {
    res.send(peoples);
  });

  //POST : post new person to peoplesData
  app.post("/api/peoples", (req, res) => {
    res.json(req.body);
  });

  //PATCH : partially replace the data
  app.patch("/api/peoples/:last_name", (req, res) => {
    const last_name = req.params.last_name;
    console.log("server,params.last_name: " + last_name);
    // iterate over array
    // console.log("server: " + peoples.peoples);
    for (let i = 0; i < peoples.peoples.length; i++) {
      //if last_name of a person matches, get the object of that specific person
      if (last_name === peoples.peoples[i].last_name) {
        //replace the old last_name to new last_name
        // Check req.body => find the properties to update
        for (const key in req.body) {
          // then assign the person key to req.body[key]
          peoples.peoples[i][key] = req.body[key];
        }
      }
    }
    // Sends res of the entire peoples data, incluing the modified person
    res.json(peoples.peoples);
  });

  // app.listen(port, function () {
  //   console.log("listening on port: ", port);
  // });

  //last line
  return app;
};

module.exports = { setupServer };
