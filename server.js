const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const app = express();
const pacijenti=require('./routes/api/pacijenti');
const testovi=require('./routes/api/testovi');
const nalazi=require('./routes/api/nalazi');

app.use(bodyParser.json());

//DB CONFIG
const db=require('./config/keys').mongoURI;
//CONNECT
mongoose.connect(db).then(()=>console.log('BAZA SPOJENA')).catch(err=>console.log(err));
//routes
app.use('/api/nalazi',nalazi);
app.use('/api/pacijenti',pacijenti);
app.use('/api/testovi',testovi);



const port = 5000;

app.listen(port,()=>console.log('server started on port 5000'));
