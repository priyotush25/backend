const express = require('express');
require("dotenv").config();
const cors = require('cors');
const PORT = process.env.PORT || 4000;

const app = express();

app.use(express())
app.use(cors())


app.get("/", (req, res)=>{
    res.send("server is running")
})

app.listen(PORT,()=>{
    console.log(`server running : http://localhost:${PORT}`);
})