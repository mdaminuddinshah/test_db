import express from "express";
import test from "./controller/test.js";
import connectionDB from "./database/DB.js";

const port = 2222;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

connectionDB();

app.use("/", test);
app.listen(port);