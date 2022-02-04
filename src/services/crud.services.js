import { logConsol } from "../utils/logger.util.js";

// Acá van a estar los métods genéricos

class Services {
  constructor(model) {
    this.model = model;
  }
  // Métodos
  async getAll() {
    try {
      const items = await this.model.find();
      return items;
    } catch (error) {
      logConsol(error);
    }
  }

  async getById(id) {
    try {
      const item = await this.model.findById(id);
      return item;
    } catch (error) {
      logConsol(error);
    }
  }

  async createDocument(item) {
    try {
      const document = await this.model.create(item);
      return document;
    } catch (error) {
      logConsol(error);
    }
  }

  async deleteById(id) {
    try {
      const deleted = await this.model.findByIdAndDelete(id);
      return deleted;
    } catch (error) {
      logConsol(error);
    }
  }
}

export default Services;
