const connection = require("../../database/connection");

const getByCnpj = async (cnpj) => {
  return await connection("gyms").select("*").where("cnpj", cnpj).first();
};

const modelGetAll = async () => {
  return await connection("gyms").select("*");
};

const modelCreate = async (cnpj, name) => {
  return await connection("gyms")
    .insert({
      cnpj,
      name,
    })
    .returning("*");
};

module.exports = {
  getByCnpj,
  modelGetAll,
  modelCreate,
};