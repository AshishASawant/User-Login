const mongoose=require('mongoose')
const database=process.env.MONGODB
mongoose.set("strictQuery", false);
mongoose.connect(database,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('connection to db successfull')
}).catch((err)=>{
    console.log(err,"INternal server error")
})
