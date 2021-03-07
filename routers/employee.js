const express = require('express')
const router = express.Router()
const Emp = require('../models/employeeModel')

router.get('/' ,async(req,res) => {
    try{
        console.log("Getting Emp details")
        const emp = await  Emp.find()
        res.json(emp)
    }catch(err){
        res.send('ERROR - ' + err)
    }
})

router.get('/:id' ,async(req,res) => {
    try{    
        console.log("Getting Emp details")
        //const emp = await  Emp.findById(req.params.id)

        Emp.find({'EmpID':req.params.id}, 'EmpName tech', (err,emp) =>{
            res.json(emp)
        })

        
    }catch(err){
        res.send('ERROR - ' + err)
    }
})

router.post('/' ,async(req,res) => {
    
    const emp = new Emp({
        EmpID: req.body.id,
        EmpName: req.body.name,
        tech: req.body.tech
    })
    
    try{
        console.log("Saving Emp details")
        const empl = await emp.save()
        res.json(empl)
    }catch(err){
        res.send('ERROR - ' + err)
    }
})

module.exports = router