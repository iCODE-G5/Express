const express = require('express');

const app = express();


const users = [{
    name :'Harkirat',
    kidneys: [{
        
        healthy:false

    }]
}];

app.use(express.json());

app.get('/', (req,res)=>{
    const jonKidneys = users[0].kidneys;
    let numberOfKidneys = jonKidneys.length;
    let countHealtyKidneys = 0;
    for(i=0;i<jonKidneys.length;i++){
       if (jonKidneys[i].healthy){
        countHealtyKidneys += 1;
       } 
    } 
    let countUnhealthyKidneys = numberOfKidneys-countHealtyKidneys;
    
    res.json({

        numberOfKidneys,
        countHealtyKidneys,
        countUnhealthyKidneys
     })
    
 })
 
 app.post('/', (req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        message: 'Done!'
    })
    
})

app.put('/',(req,res)=>{
    if(atLeastOneUnhealthyKidney()){
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
        }else
            {
                res.sendStatus(411).json({
                    Error_msg: 'You dont have any bad kidneys' });
            }

    res.json({})

})

app.delete('/', (req,res)=>{
    const newKidneys = [];
    for(i=0; i<users[0].kidneys.length; i++){
        if (users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({});
})

function atLeastOneUnhealthyKidney(check){
    let atLeastOneUnhealthyKidney = false;
    for(i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy)
            atLeastOneUnhealthyKidney=true;
        
    }
    return atLeastOneUnhealthyKidney;

}

app.listen(3000);


