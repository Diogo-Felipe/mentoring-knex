const express = require("express");

const { index, create, getAll } = require("../../controllers/GymsController");

const gyms = express.Router();

gyms.get("/:cnpj", (request, response) => {
  index(request, response);
});

gyms.get("/", (request, response) => {
  getAll(request, response);
});

gyms.post("/", (request, response) => {
  create(request, response);
});

module.exports = {
  gyms,
};
