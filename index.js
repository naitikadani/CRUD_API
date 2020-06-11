const express = require('express');
const app = express();
const port = 3000; 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);
//app.use('/user', userRoute)

//Routes
app.get('/', (req, res) => {
    res.send("Ab maza aayega na bidhu!");
})

//Connect to Mongo
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('Connected to DB!');
});

//Starting server
app.listen(3000, (req, res) => {
    console.log("Listening on port: ", port)
}); 