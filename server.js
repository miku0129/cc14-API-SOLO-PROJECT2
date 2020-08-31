let express = require('express');
let bodyParser = require('body-parser');
let port = process.env.PORT || 8000;
let app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

app.listen(port, function(){
    console.log("listening on port: ",port);
})