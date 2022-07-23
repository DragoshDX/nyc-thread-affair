// next.js /products -> {}
// http://localhost:3000/api/products ->
// [{
//  productName: ''
//  productPrice: ''
//  productImage: '/images/products'
// }]
// https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json([
    {
      productName: 'Thread Affair Traveller Suit',
      productPrice: 200,
      productImage: '/images/products/product-01a.jpg',
    },
    {
      productName: 'Thread Affair Traveller Suit',
      productPrice: 100,
      productImage: '/images/products/product-02a.jpg',
    },
    {
      productName: 'Thread Affair Traveller Suit',
      productPrice: 400,
      productImage: '/images/products/product-03a.jpg',
    },
    {
      productName: 'Thread Affair Traveller Suit',
      productPrice: 550,
      productImage: '/images/products/product-04a.jpg',
    },
    {
      productName: 'Thread Affair Traveller Suit',
      productPrice: 600,
      productImage: '/images/products/product-05a.jpg',
    },
    {
      productName: 'Thread Affair Traveller Suit',
      productPrice: 3000,
      productImage: '/images/products/product-06a.jpg',
    },
  ]);
};
