const express = require('express');
const dotenv = require("dotenv").config()
const mongoose = require('mongoose');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection');
const app = express();
const PORT = process.env.PORT || 5000;

connectDB()

app.use(errorHandler)
app.use(express.json())
app.use("/api/customer" , require("../backend/routes/customer"))                                                  
// app.use("/api/login" , require("../backend/routes/login_register"))                                                                    

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
