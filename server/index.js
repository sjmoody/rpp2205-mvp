
const express = require('express')
const app = express()

const db = require ('../database');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

const port = 3000

app.get('/api/intentions', async (req, res) => {
  console.log("request to api")
  let intentions = await db.getIntentions();
  // res.send(intentions);
  return res.status(200).json(intentions);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})