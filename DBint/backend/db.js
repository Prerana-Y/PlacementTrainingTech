const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(
            'mongodb+srv://preranarolex7996:Pyy@cluster0.1h7joe6.mongodb.net/testdb',{
        });
        console.log('MongoDB Connected.');
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectDB;