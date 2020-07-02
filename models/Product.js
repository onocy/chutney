class Product {
  constructor(id, ownerId, title, imageUrl, description, price, catererId) {
    this.id = id;
    this.ownerId = ownerId;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.price = price;
    this.catererId = catererId
  }
}

export default Product;
