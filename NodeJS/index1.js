
import express from 'express';
const app = express();

app.get("/", (req, res) => {
    console.log(req.url);
    res.send("hello");
});

app.get("/home", (req, res) => {
    console.log(req.url.method)
    res.send("home page");
});

app.get("/home/page1", (req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.body);
    console.log(req.headers.authorization)
    res.send("home page/page 1");
});

app.listen(8082, () => {
    console.log("server started on port 8082");
});