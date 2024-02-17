const exp = require('express')
const envPath = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env";
require("dotenv").config({ path: envPath });
let app =exp()

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`server started on port ${process.env.PORT}`)
})

const {sequelize} = require('./models/index')