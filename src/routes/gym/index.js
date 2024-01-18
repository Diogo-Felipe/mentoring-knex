const express = require("express");

const {
  index,
  create,
  getAll,
  deleteGym,
  updateGym,
} = require("../../controllers/GymsController");

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

gyms.delete("/:cnpj", (request, response) => {
  deleteGym(request, response);
});

gyms.put("/:cnpj", (request, response) => {
  updateGym(request, response);
});

module.exports = {
  gyms,
};
