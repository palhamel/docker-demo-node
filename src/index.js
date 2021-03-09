const app = require('express')()

app.get('/', (req, res) =>
  res.json({message: 'Docker is working great'})
)

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`✅ app is running on http://localhost:${port}`))