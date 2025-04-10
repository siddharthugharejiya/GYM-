const express = require("express")
const Server = require("./Config/Server")
const app = express()


app.listen(9595,()=>{
    console.log("port is running")
    Server()
})