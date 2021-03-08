const express = require('express')
const mong = require('mongoose')
const port = process.env.PORT || 9000
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
app.use('/', (req,res) =>{
    res.send("App is running...")
})

app.listen(port, () => {
    console.log("Server Started...")
})
