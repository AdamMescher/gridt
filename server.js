const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Gender = require("./db/schemas/genderSchema");
const Race = require("./db/schemas/raceSchema.js");
const Disability = require("./db/schemas/disabilitySchema");
const District = require("./db/schemas/districtSchema");
const School = require("./db/schemas/schoolSchema");

const app = express();
app.use(cors());
app.use(express.json());
app.set("port", process.env.PORT || 3333);
app.locals.title = "GRID-T";

const mongoDbPath = "mongodb://localhost/gridt";
const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(mongoDbPath, mongooseOptions);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("CONNECTED TO GRID-T DB");
});

// GENDERS
app.get("/api/v1/genders", async (request, response) => {
  try {
    const genders = await Gender.find({});
    response.status(200).json({ genders }).end();
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
});

// RACES
app.get("/api/v1/races", async (request, response) => {
  try {
    const races = await Race.find({});
    response.status(200).json({ races }).end();
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
});

// DISABILITIES
app.get("/api/v1/disabilities", async (request, response) => {
  try {
    const disabilities = await Disability.find({});
    response.status(200).json({ disabilities });
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
});

// DISTRICTS
app.get("/api/v1/districts", async (request, response) => {
  try {
    const districts = await District.find({});
    response.status(200).json({ districts });
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
});

// SCHOOL
app.get("/api/v1/schools", async function (request, response) {
  try {
    const schools = await School.find({});
    response.status(200).json({ schools });
    response.end();
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
});

app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is running on port ${app.get("port")}`);
});
