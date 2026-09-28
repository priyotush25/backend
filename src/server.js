const express = require('express');
require("dotenv").config();
const cors = require('cors');
const PORT = process.env.PORT || 4000;

const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express())
app.use(cors())


// Route connect
app.use("/api/users/", userRoutes)

app.get("/", (req, res)=>{
    res.send("server is running")
})

app.listen(PORT,()=>{
    console.log(`server running : http://localhost:${PORT}`);
})