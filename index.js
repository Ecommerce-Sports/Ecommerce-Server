const express = require("express");
const app = express();
const PORT = 3000;
const route = require("./routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", (route))

app.listen(PORT, ()=> {
    console.log(`listening at port http://localhost:${PORT}`);
});