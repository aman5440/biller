const express = require('express');
const config = require('config');
const app = express();
const cors = require('cors');
const productRouter = require('./routes/product')
const mongoose = require('mongoose');


const mongo_uri = config.get("mongo_uri")

console.log(mongo_uri);
mongoose.connect(mongo_uri,  
    {   
        // useNewUrlParser:true,
        // useUnifiedTopology: true,
        //auth: {authdb: 'admin'},
        // "user": "myUserAdmin",
        // "pass": "N0p@sword"
    }).then((res)=>{
}).catch(err=> console.log('Err in conn',err));


app.use(cors());
app.use(express.json())
app.use('/product',productRouter);

let port = process.env.port || 3000 ;

app.listen(port,()=>{
    console.log('Yes am listening');
})