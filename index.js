import express from "express";

const app = express();
const port = 80;

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/test", (req, res) => {
    res.send("test");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
