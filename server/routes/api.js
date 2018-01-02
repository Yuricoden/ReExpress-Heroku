import express from "express";
import User from "../models/User";

const router = express.Router();

router.get("/", (req, res) => {
  res.set("Content-Type", "application/json");
  res.send('{"message":"Hello from the custom server!"}');
});

router.get("/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "Erick", lastName: "Mwamodo" },
    { id: 2, firstName: "Alicia", lastName: "Wangari" }
  ];
  res.json(customers);
});

router.get("/users", (req, res) => {
  User.find({}).then(users => {
    res.json(users);
  });
});

export default router;
