const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

const index = require("./routes/index");

const staticPath = path.join(__dirname, "/public");

//set View Engine
app.set("view engine", "ejs");

//set Static Folder
app.use(express.static(staticPath));

app.use("/", index);

//start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
