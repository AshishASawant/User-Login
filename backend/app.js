const express=require('express')
const cors=require('cors')
const cookieParser = require('cookie-parser');
require('dotenv').config();
require('./db/db')
const app=express()
const port=process.env.PORT

const corsOptions = {
    origin: true, //included origin as true
    credentials: true, //included credentials as true
};

//middleware
app.use(express.json())
app.use(cors(corsOptions));
app.use(cookieParser());

app.use('/',require('./routes/userRoutes'))

app.get('/',(req,res)=>{
    res.status(200).send('hello')
})


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})