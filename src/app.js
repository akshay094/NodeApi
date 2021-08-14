require('./db/conn')
const Student = require('./models/students')
const express = require('express')
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());

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

app.get('/students', async (req, res) => {
  try {
    const respo = await Student.find()
    res.send(respo)
  } catch (err) {
    res.send(err)
  }
})

app.get('/students/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const respo = await Student.find({ _id })

    if (!respo) {
      return res.status(404).send()
    } else {
      res.send(respo)
    }

  } catch (err) {
    res.status(500).send(err)
  }
})

app.delete("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const res = await Student.findByIdAndDelete({ _id })
    if (!_id) {
      return res.status(404).send()
    }
    res.send(res);
  } catch (err) {
    res.status(500).send(err)
  }
})


app.listen(port, () => {
  console.log(` Server Started at port ${port}`);
})