// 🔧 Exporting an anonymous function that fills a product HTML template with real product data
module.exports = (temp, product) => {
  // Replace {%PRODUCTNAME%} in the HTML template with the actual product name
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%ID%}/g, product.id);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  
  // If the product is NOT organic, insert a CSS class to style it differently
  // For example, the template might have a class placeholder like:
  // <div class="product-card {%NOT_ORGANIC%}"> → this would become:
  // <div class="product-card not-organic">
  if (!product.organic) {
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  }

  // Return the fully populated HTML string
  return output;
};
