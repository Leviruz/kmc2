import { Router } from "express";

const router = Router();

import {
  getAllCars,
  getSingleCar,
  addCar,
  updateCar,
  deleteCar,
} from "../controllers/carController.js";


router.route('/').get(getAllCars).post(addCar)
router.route('/:id').get(getSingleCar).patch(updateCar).delete(deleteCar)


export default router
