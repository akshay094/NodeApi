require('./db/conn')
const express = require('express')
const app = express();

const port = process.env.PORT || 8000;
const router = require('./router/studentroute')
app.use(express.json())

app.use(router)
app.listen(port, () => {
  console.log(` Server Started at port ${port}`);
})
