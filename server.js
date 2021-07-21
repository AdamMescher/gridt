const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());
app.set("port", process.env.PORT || 3333);
app.locals.title = 'GRID-T';

const mongoDbPath = "mongodb://localhost/gridt-db";
const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(mongoDbPath, mongooseOptions);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("CONNECTED TO GRID-T");
});

// SCHOOL
app.get('api/v1/schools', async function (request, response) {
  const schools = await School.find({})
  console.log(schools)
  response.json({ data: schools });
  response.end();
});

// // KITTENS
// const kittenSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   age: { type: Number, required: true },
//   type: { type: String, required: true },
// });

// const Kitten = mongoose.model("Kitten", kittenSchema);

// app.get("/api/v1/kittens", async (request, response) => {
//   const kittens = await Kitten.find({});
//   response.json({ data: kittens });
//   response.end();
// });

// app.get("/api/v1/kitten/:id", async (request, response) => {
//   const _id = request.params.id;
//   const kitten = await Kitten.find({ _id });
//   response.json({ data: kitten });
//   response.end();
// });

// app.get("/api/v1/kitten:name", async (request, response) => {
//   const name = request.params.name;
//   const kittens = await Kitten.find({ name });
//   response.json({ data: kittens });
//   response.end();
// });

// app.post("/api/v1/kittens", async (request, response) => {
//   console.log({ body: request.body });
//   const kitten = new Kitten({
//     name: request.body.name,
//     age: request.body.age,
//     type: request.body.type,
//   });
//   await kitten.save();
//   response.json({ kitten });
//   response.end();
// });

// app.put("/api/v1/kitten/:id", async (request, response) => {
//   console.log('fired')
//   const _id = request.params.id;
//   const filter = _id;
//   const update = request.body;
//   await Kitten.findOneAndUpdate(filter, update);
//   response.end();
// });

// app.delete("/api/v1/kittens/:name", (request, response) => {
//   const name = request.params.name;
//   Kitten.deleteMany({ name }, (error) => {
//     if (error) { return console.error(error); }
//   });
//   response.end();
// });

app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is running on port ${app.get("port")}`);
});
