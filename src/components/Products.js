import React from "react";

const products = [
  {
    id: 1,
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    rate: 3.9,
    description:
      "Description: Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  },
  {
    id: 2,
    img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    rate: 4.1,
    description:
      "Description: Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  },
  {
    id: 3,
    img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    title: "Mens Cotton Jacket",
    price: 55.99,
    rate: 4.7,
    description:
      "Description: great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  },
  {
    id: 4,
    img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    title: "Mens Casual Slim Fit",
    price: 15.99,
    rate: 2.1,
    description:
      "Description: The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
  },
  {
    id: 5,
    img: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    rate: 4.6,
    description:
      "Description: From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
  },
  {
    id: 6,
    img: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    title: "Solid Gold Petite Micropave ",
    price: 168,
    rate: 3.9,
    description:
      "Description: Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
  },
];

const Product = () => {
  return (
    <article className="article__">
      <div className="product">
        {products.map((product) => (
          <div key={product.id} className="product__background">
            <img src={product.img} alt="" />
            <h3 className="product__title">{product.title}</h3>
            <p className="product__price">Price: ${product.price}</p>
            <p className="product__rate">Ratting: {product.rate}/5</p>
            <p className="product__desc">{product.description}</p>
            <button className="button__cart">Add to cart</button>
          </div>
        ))}
      </div>
    </article>
  );
};
export default Product;
