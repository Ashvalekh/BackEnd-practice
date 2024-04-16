const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) // middleware ko use karne k liye use hota h, or express.static ek built in midlleware h jo kehta h public folder ko public bannado 

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('About us')
})
app.get('/contact', (req, res) => {
  res.send('Hello contact us')
})
app.get('/blog', (req, res) => {
  //logic to fetch intro to js from the db
  res.send('Hello blog')
})
app.get('/blog/:slug', (req, res) => {
  //logic to fetch {slug} from the db
  //for this url https://ubiquitous-space-barnacle-q77pp4v7ww6pfxxgw-3000.app.github.dev/blog/intro-to-saas-meri?mode=dark&region=in
  console.log(req.params);//will output {slug: 'intro-to-padosi'}
  console.log(req.query);//will output {mode: 'dark', region: 'in'}
  res.send(`hello ${req.params.slug}`)
})
// app.get('/blog/intro-to-js', (req, res) => {
//   //logic to fetch intro to js from the db
//   res.send('Hello blog this is js')
// })
// app.get('/blog/intro-to-python', (req, res) => {
//   //logic to fetch intro to python from the db
//   res.send('Hello blog')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})