import { logConsol } from "../utils/logger.util.js";
import Services from "./crud.services.js";

// Métodos genéricos y los métodos propipios de los productos
class CartServices extends Services {
  constructor(model) {
    super(model);
  }

  async getCarts() {
    try {
      const carts = await this.getAll();
      return carts;
    } catch (error) {
      {
        logConsol(error);
      }
    }
  }

  async getCartById(id) {
    try {
      const cart = await this.getById(id);
      return cart;
    } catch (error) {
      {
        logConsol(error);
      }
    }
  }

  createCart = async (cart) => await this.createDocument(cart);

  async deleteCartById(id) {
    try {
      const deleteCart = await this.deleteById(id);
      return deleteCart;
    } catch (error) {
      {
        logConsol(error);
      }
    }
  }

  async deleteProduct(cartId, productId) {
    try {
      const cart = await this.model.findById(cartId);

      //Métodos de Vnailla JS para borrar el producto del carrito
      const index = cart.products.findIndex(
        (product) => product._id == productId
      );
      cart.products.splice(index, 1);

      //Guardo el documento en MongoDB
      cart.save();
      return productId;
    } catch (error) {
      logConsol(error);
    }
  }

  async addProduct(cartId, newProduct) {
    try {
      const cart = await this.model.findById(cartId);

      cart.products.push(newProduct);
      cart.save();

      return newProduct;
    } catch (error) {
      logConsol(error);
    }
  }

  async getProducts(id) {
    try {
      const cart = await this.model.findById(id);
      const productos = await cart.products;
      return productos;
    } catch (error) {
      logConsol(error);
    }
  }
}
export default CartServices;
