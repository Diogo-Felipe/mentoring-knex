const express = require("express");

class GymsRouter {
  constructor(gymsController) {
    this.gyms = express.Router();

    this.gymsController = gymsController;

    gyms.get("/:cnpj", (request, response) => {
      this.gymsController.index(request, response);
    });

    gyms.get("/", (request, response) => {
      this.gymsController.getAll(request, response);
    });

    gyms.post("/", (request, response) => {
      this.gymsController.create(request, response);
    });

    gyms.delete("/:cnpj", (request, response) => {
      this.gymsController.delete(request, response);
    });

    gyms.put("/:cnpj", (request, response) => {
      this.gymsController.update(request, response);
    });
  }

  getRoutes() {
    return this.gyms;
  }
}

module.exports = GymsRouter;
