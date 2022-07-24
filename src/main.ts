import express from 'express'
import path from 'path'
import dotenv from 'dotenv'

const app = express()

dotenv.config()
app.disable('x-powered-by')

app.use('*', (req, _, next) => {
  console.log(`${req.method} ${req.path}`)

  next()
})

app.use('/public', express.static(path.resolve('./public')))

app.get('/', (_, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.sendFile(path.resolve('./public/index.html'))
})

const PORT = process.env.ENVIRONMENT === 'production' ? 80 : 8080

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
