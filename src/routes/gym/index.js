const express = require("express");

class GymsRouter {
  constructor(gymsController) {
    this.gyms = express.Router();

    this.gymsController = gymsController;

    this.gyms.get("/:cnpj", (request, response) => {
      this.gymsController.index(request, response);
    });

    this.gyms.get("/", (request, response) => {
      this.gymsController.getAll(request, response);
    });

    this.gyms.post("/", (request, response) => {
      this.gymsController.create(request, response);
    });

    this.gyms.delete("/:cnpj", (request, response) => {
      this.gymsController.delete(request, response);
    });

    this.gyms.put("/:cnpj", (request, response) => {
      this.gymsController.update(request, response);
    });
  }

  getRoutes() {
    return this.gyms;
  }
}

module.exports = GymsRouter;
