import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
const app = express();

//routers
import carRouter from "./routes/carRouter.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("teste");
});

app.use('/api/v1/cars',carRouter);
//notfound

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

// error route

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "something went wrong" });
});

// port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`porta ${port} `);
});
