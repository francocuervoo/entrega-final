import { logConsol } from "../utils/logger.util.js";
import Services from "./crud.services.js";

// Métodos genéricos y los métidos propipios de los productos
class ProductServices extends Services {
  constructor(model) {
    super(model);
  }

  async getProducts() {
    try {
      const products = await this.getAll();
      return products;
    } catch (error) {
      logConsol(error);
    }
  }

  async getProductById(id) {
    try {
      const product = await this.getById(id);
      return product;
    } catch (error) {
      logConsol(error);
    }
  }

  async createProduct(product) {
    try {
      const newProduct = this.createDocument(product);
      return newProduct;
    } catch (error) {
      logConsol(error);
    }
  }

  async deleteProductById(id) {
    try {
      await this.deleteById(id);
      return;
    } catch (error) {
      logConsol(error);
    }
  }

  async updateProductById(id, product) {
    const { title, description, price, stock, thumbnail } = product;

    try {
      await this.model.findByIdAndUpdate(id, {
        title,
        description,
        price,
        stock,
        thumbnail,
      });

      const updated = await this.model.findById(id);

      return updated;
    } catch (error) {
      logConsol(error);
    }
  }
}

export default ProductServices;
