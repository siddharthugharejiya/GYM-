const mongoose = require('mongoose')


const Server = async() =>{
 await mongoose.connect("mongodb+srv://multiera95:95@gym.2hau2za.mongodb.net/?retryWrites=true&w=majority&appName=gym")
 console.log("Server Is Running");
 
}
module.exports = Server