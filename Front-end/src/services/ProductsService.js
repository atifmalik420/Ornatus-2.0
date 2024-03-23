import GenericService from "../services/GenericServices";
class ProductsService extends GenericService {
  
  addProduct = (data) => this.post("products", data);
  deleteProduct = (_id) => this.delete("products/" + _id);
  updateProduct = (_id, data) => this.put("products/" + _id, data);
  getProducts = () => this.get("products");
  getSingleProduct = (id) => this.get("products/" + id);
}

let productService = new ProductsService();
export default productService;
