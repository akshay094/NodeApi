const express = require('express')
const router = new express.Router()
const Student = require('../models/students')


router.get('/', (req, res) => {
  res.send("hey There")
})


router.post('/students', (req, res) => {
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

router.get('/students', async (req, res) => {
  try {
    const respo = await Student.find()
    res.send(respo)
  } catch (err) {
    res.send(err)
  }
})

router.get('/students/:id', async (req, res) => {
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

router.delete("/students/:id", async (req, res) => {
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

router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const res = await Student.findByIdAndUpdate(_id, req.body)
    res.send(res);
  } catch (err) {
    res.status(404).send(err)
  }
})

module.exports = router
