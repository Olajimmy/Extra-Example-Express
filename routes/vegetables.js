const express = require("express");
const router = express.Router();

const Vege = require("../models/vegetables");
//
router.get("/", async (req, res) => {
  try {
    const foundVegetables = await Vege.find({});
    res.status(200).json(foundVegetables);
  } catch (err) {
    res.status(400).send(err);
  }
});
//
router.get("/seed", async (req, res) => {
  try {
    await Vege.create([
      {
        name: "Brocolli",
        color: "green",
        readyToEat: true,
      },
      {
        name: "Tomato",
        color: "red",
        readyToEat: true,
      },
      {
        name: "Cucumber",
        color: "green",
        readyToEat: true,
      },
      {
        name: "spinach",
        color: "green",
        readyToEat: false,
      },
      {
        name: "grapes",
        color: "green",
        readyToEat: false,
      },
    ]);

    res.status(200).redirect("/api/vegetables");
  } catch (err) {
    res.status(400).send(err);
  }
});

// CREATE
router.post("/", async (req, res) => {
  console.log(req.body);
  // you should check this when you first start, but then get rid of this console.log
  // console.log(req.body);
  // need to add logic to change the check or not checked to true or false
  if (req.body.readyToEat === "on") {
    // if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else {
    // if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  // take this out because it worked with the array, and i want to access my database
  // fruits.push(req.body)
  try {
    const createdVege = await Vege.create(req.body);
    res.status(200).redirect("/api/vegetables");
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
