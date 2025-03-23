import express from "express";
import { dbConnection } from "../models/connection.js";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";

//importing Routes
import Authroute from "../routes/auth.route.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const app=express();

dotenv.config();
const PORT = process.env.PORT;
//dbconnection
dbConnection(process.env.dburl);



app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));

//essential middlewares
app.use(bodyParser.json({ limit: "10mb" }));  // Adjust size as needed
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());

app.get('/ping', (req, res) => {
    res.send('PONG');
});

//Routes
app.use('/api/auth',Authroute);


app.listen(PORT,()=>{
    console.log(`Server running at port  ${PORT}`)
})