class GymsModel {
  constructor(connection) {
    this.connection = connection;
  }

  async getByCnpj(cnpj) {
    return await this.connection("gyms")
      .select("*")
      .where("cnpj", cnpj)
      .first();
  }

  async getAll() {
    return await this.connection("gyms").select("*");
  }

  async create(cnpj, name) {
    return await this.connection("gyms")
      .insert({
        cnpj,
        name,
      })
      .returning("*");
  }

  async delete(cpnj) {
    return await this.connection("gyms").where("cnpj", cpnj).delete();
  }

  async update(cnpj, name) {
    return await this.connection("gyms").where("cnpj", cnpj).update(
      {
        name,
      },
      ["cnpj", "name"]
    );
  }
}

module.exports = GymsModel;
