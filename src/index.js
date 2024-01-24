const express = require("express");

const app = express();

const connection = require("./database/connection");

const GymsModel = require("./models/GymsModel");
const GymsController = require("./controllers/GymsController");
const { GymsRouter } = require("./routes");

const gymsModel = new GymsModel(connection);
const gymsController = new GymsController(gymsModel);
const gymsRouter = new GymsRouter(gymsController)

app.use(express.json());

app.use("/gyms", gymsRouter.getRoutes());

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
