const {
  modelGetAll,
  modelCreate,
  getByCnpj,
  modelDeleteGym,
  modelUpdateGym,
} = require("../../models/GymsModel");

const index = async (request, response) => {
  const { cnpj } = request.params;

  const gyms = await getByCnpj(cnpj);

  return response.status(200).json(gyms);
};

const getAll = async (request, response) => {
  const gyms = await modelGetAll();

  return response.status(200).json(gyms);
};

const create = async (request, response) => {
  const { cnpj, name } = request.body;

  const gym = await modelCreate(cnpj, name);

  return response.status(200).json(gym);
};

const deleteGym = async (request, response) => {
  const { cnpj } = request.params;

  const gym = await modelDeleteGym(cnpj);

  return response.status(204).json(gym);
};

const updateGym = async (request, response) => {
  const { cnpj } = request.params;
  const { name } = request.body;

  const gym = await modelUpdateGym(cnpj, name);

  return response.status(200).json(gym);
};

module.exports = {
  index,
  create,
  getAll,
  deleteGym,
  updateGym,
};
