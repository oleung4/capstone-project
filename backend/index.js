const express = require('express')
const bodyParser = require('body-parser')

// import user from './routes/users';
// import auth from './routes/auth'
// import event from './routes/event'
const user = require('./routes/users')
const auth = require('./routes/auth')


let app = express();

app.use(bodyParser.json());
app.use('/api/users', user)
app.use('/api/auth', auth)
// app.use('/api/events', event)

app.get('/', (req,res)=>{
    res.send('Your fucking captone backend is runing la')
})

app.listen(6060, ()=>{console.log('Captone Backend API server Running on localhost:6060')})