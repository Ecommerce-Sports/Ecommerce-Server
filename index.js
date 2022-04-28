const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("HAAAI KITA AKAN DEVELOP BACKEND DISINI YAH")
});

app.listen(PORT, () => {
    console.log(`listening at PORT http://localhost:${PORT}`);
});