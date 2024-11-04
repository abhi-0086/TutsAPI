const express = require ('express');
const bodyPasrser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: 'http://localhost:8001'
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyPasrser.json());

//parse requests of content type - applications/x-www-form-urlencoded
app.use(express.urlencoded({extended : true}));

//simple route
app.get("/", (req, res) => {
    res.json({message : "Welcome to Tutorials API"});
});

//set port and listens for request
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});