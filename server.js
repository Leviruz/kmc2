import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
const app = express();
import { nanoid } from "nanoid";
let cars = [
  {
    id: nanoid(),
    placa: "abc123",
    hs: "10:30",
    he: "12:00",
    kmf: "12385",
    kmi: "12400",
  },
  {
    id: nanoid(),
    placa: "def456",
    hs: "12:30",
    he: "14:00",
    kmf: "42130",
    kmi: "44200",
  },
];

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("teste");
});

// get all cars

app.get("/api/v1/cars", (req, res) => {
  res.status(200).json({ cars });
});
// add car
app.post("/api/v1/cars", (req, res) => {
  const { placa, hs, he, kmf, kmi } = req.body;
  if (!placa || !hs || !he || !kmf || !kmi) {
    return res.status(400).json({ msg: "error, something is missing" });
  }
  const id = nanoid();

  const car = { id, placa, hs, he, kmf, kmi };
  cars.push(car);
  res.status(201).json({ msg: "carro adicionado com sucesso", car });
});

// get single car

app.get("/api/v1/cars/:id", (req, res) => {
  const { id } = req.params;
  const car = cars.find((car) => car.id === id);
  if (!car) {
    return res.status(404).json({ msg: `car not found with id:${id}` });
  }
  res.status(200).json({ car });
});
// update car

app.patch("/api/v1/cars/:id", (req, res) => {
  const { placa, hs, he, kmf, kmi } = req.body;
  if (!placa || !hs || !he || !kmf || !kmi) {
    return res.status(400).json({ msg: "error, something is missing" });
  }

  const { id } = req.params;

  const car = cars.find((car) => car.id === id);
  if (!car) {
    return res.status(404).json({ msg: `car not found with id:${id}` });
  }

  car.placa = placa;
  car.hs = hs;
  car.he = he;
  car.kmf = kmf;
  car.kmi = kmi;

  res.status(200).json({ msg: "carro alterado com sucesso", car });
});

//delete car

app.delete("/api/v1/:id", (req, res) => {
  const { id } = req.params;
  const car = cars.find((car)=> car.id === id);
  if (!car){
    return res.status(404).json({msg:`coulndt find a car with id: ${id}`})
  }
  const newCars = cars.filter((car) => car.id !== id);
  cars = newCars;
  res.status(200).json({ msg: "car deleted" });
});

// port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`porta ${port} `);
});
