const express = require('express');

const app = express();

function sum(n){
    let ans =0;
    for(i=0; i<=n; i++){
        ans += i;
    }
    return ans;
}

function prod(m){
    let product=1;
    for (i=1;i<=m;i++)
        {
        product *= i;
    }
    return product;
}

app.get('/', (req,res)=>{
        const n = req.query.n;
        const ans =sum(n);

        const m = req.query.m;
        const product = prod(m);

        res.send(`Hi there! Your sum upto ${n}th digit is : ${ans} AND Your Product upto ${m}th digit is : ${product}`)
           
})

app.listen(3000);
