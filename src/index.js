// const app = require('express')()

import express from 'express'

const app = express()

// app.get('/', (req, res) =>
//   res.json({message: 'Docker is working great'})
// )

app.get('/', (req, res) =>
  res.send('Hello world - backend here! 🔥 Docker is great!')
)

// Defines the port the app will run on:
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`✅ app is running on http://localhost:${port}`))