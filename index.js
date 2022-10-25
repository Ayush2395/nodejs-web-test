const express = require('express')
const port = 8080;
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.status(200).render('index',{title:'Home'})
})


app.get('/about', (req, res) => {
  res.status(200).render('about',{title:'Home'})
})


app.get('/contact', (req, res) => {
  res.status(200).render('contact',{title:'Home'})
})

app.use((req,res)=>{
  res.status(404).render('404',{title:'Page not found'})
})

app.listen(port, () => console.log(`server runnin on port ${port}`))