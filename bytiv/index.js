//essential imports
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const taskRoutes = require("./Routes/taskRoutes");
const app = express();
//defining port
const PORT = 8000;

//using bodyparser to read req.body
app.use(bodyParser.json());

//establising connection using mongoose
mongoose
  .connect(
    "mongodb+srv://sohamjain125:sohamjain125@to-do.4s11f.mongodb.net/?retryWrites=true&w=majority&appName=to-do",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("connected to server"))
  .catch((err) => {
    console.log("Error connecting to server", err);
  });

//defining route
app.use("/tasks", taskRoutes);

//starting the port
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
