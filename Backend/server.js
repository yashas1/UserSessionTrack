import express from "express";
import userRouter from "./routes/userRoutes.js"
import connectDB from "./config/db.js";


connectDB();
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{

    res.send("api is working")
})

app.use("/api/users", userRouter);
const port = process.env.PORT || 5500;
app.listen(
  port,
  console.log(`server running on port ${port}`)
);
