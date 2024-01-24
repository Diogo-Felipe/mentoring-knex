class GymsController {
  constructor(gymsModel) {
    this.gymsModel = gymsModel;
  }

  async index(request, response) {
    const { cnpj } = request.params;

    const gyms = await this.gymsModel.getByCnpj(cnpj);

    return response.status(200).json(gyms);
  }

  async getAll(request, response) {
    const gyms = await this.gymsModel.getAll();

    return response.status(200).json(gyms);
  }

  async create(request, response) {
    const { cnpj, name } = request.body;

    const gym = await this.gymsModel.create(cnpj, name);

    return response.status(200).json(gym);
  }

  async delete(request, response) {
    const { cnpj } = request.params;

    const gym = await this.gymsModel.delete(cnpj);

    return response.status(204).json(gym);
  }

  async update(request, response) {
    const { cnpj } = request.params;
    const { name } = request.body;

    const gym = await this.gymsModel.update(cnpj, name);

    return response.status(200).json(gym);
  }
}

module.exports = GymsController;
