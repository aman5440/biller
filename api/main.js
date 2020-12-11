const express = require('express');
const app = express();

let port = process.env.port || 3000 ;
app.get('/',(req,res)=>{
    res.send('Hello Bro');
    console.log('I am global listener');
});
app.listen(port,()=>{
    console.log('Yes am listening');
})