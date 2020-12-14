const express = require('express')
const app = express()
app.use(express.static('public'))


app.get('/', (req,res) =>{
    res.sendFile('./views/index.html',{ root: __dirname })
    
})

app.get('/Whyalivio', (req,res)=> {
    res.sendFile('./views/Whyalivio.html', ({root: __dirname }))
})
app.get('/Solution', (req,res)=> {
    res.sendFile('./views/Solution.html', ({root: __dirname }))
})
app.get('/Community', (req,res)=> {
    res.sendFile('./views/Community.html', ({root: __dirname }))
})


app.get('/pricing', (req,res)=> {
    res.sendFile('./views/pricing.html', ({root: __dirname }))
})
 




















app.use((req,res) =>{
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})

app.listen(5000, () =>console.log ('Server running....'))