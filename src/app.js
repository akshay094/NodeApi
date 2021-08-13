require('./db/conn')
const Student = require('./models/students')

const express = require('express')
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json())

app.get('/', (req, res) => {
  res.send("hey There")
})


app.post('/students', (req, res) => {
  console.log(req.body);
  const user = new Student(req.body)
  saveUser();
  async function saveUser() {
    try {
      let result = await user.save()
      res.status(201).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  }
})

app.listen(port, () => {
  console.log(` Server Started at port ${port}`);
})