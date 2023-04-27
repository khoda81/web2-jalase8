import express from "express";

const app = express();
const port = 80;

app.get("/", (req, res) => {
    res.send("hi");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
