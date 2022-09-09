
const express = require('express')
const app = express()

const mongoose = require('mongoose');


console.log(`db connected`)
// static page dir not included here
app.use(express.static(__dirname + '/../client/dist'));


async function getIntentions() {
  await mongoose.connect('mongodb://localhost:27017/stanislavski');
  console.log("db connected")
  const intentions = await Intention.find();
  console.log(`intentions found. Count: ${intentions.length}`);
  return intentions;
}



const port = 3000
const { Intention } = require('../database/');

app.use(express.json());
// app.use express.static <-- can use to render the static index files etc.

app.get('/intentions', async (req, res) => {
  console.log("request to api")
  let intentions = await getIntentions();
  // res.send(intentions);
  return res.status(200).json(intentions);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})