const express = require("express");
const connectDb = require("./connectDb");
const dotenv = require("dotenv").config()
const app = express()
const cors = require("cors")
const port = process.env.PORT || 5001
connectDb();

app.use(
    cors()
)

app.use(express.json())

app.use("/api/user",require("./routes/userRoutes"));
app.use("/api/userData",require("./routes/userDataRoutes"));
app.use("/api/hospital",require("./routes/hospitalRoutes"));

app.listen(port,()=>{
    console.log("server live",port);
});
