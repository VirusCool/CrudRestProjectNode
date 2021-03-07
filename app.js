const express = require('express')
const mong = require('mongoose')
const empRouter = require('./routers/employee')

const uri ="mongodb+srv://changeit:<password>@cluster0.wcwlw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const app = express();

mong.connect(uri, {user: 'changeit', pass: 'changeit',useNewUrlParser:true,useUnifiedTopology: true})
const con = mong.connection

con.on('open', () => {
    console.log("connection successfull...")
});

app.use(express.json())

app.use('/employee',empRouter)


app.listen(9000, () => {
    console.log("Server Started...")
})
