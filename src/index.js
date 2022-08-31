const http = require("http")
const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors())
const server = http.createServer(app)


require("dotenv").config()
const connect = require("./config/db")
//to add or get products
const productsController = require("./controllers/productsController")
app.use("/products", productsController)
//to add or get reviews

const reviewController = require("./controllers/reviewController")
app.use("/review", reviewController)
const { register, login } = require("./controllers/userController");
//to add or get users

app.post("/register", register)
app.post("/login", login)

// server created here 
server.listen(process.env.PORT || 5000, async () => {
    try {
        await connect();
        console.log('Server Connected Success')
    } catch (error) {
        console.log(error)
    }
})
