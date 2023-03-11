const addProduct = () => {
  const productField = document.getElementById("product-name");
  const quantityField = document.getElementById("product-quantity");
  // product values
  const product = productField.value;
  const quantity = quantityField.value;
  // product values khali string
  productField.value = "";
  quantityField.value = "";

  // console.log(product,quantity);
  displayProduct(product,quantity);
  saveProductToLocalStorage(product,quantity)
  
};

const displayProduct = (product,quantity) => {
  const ul = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerHTML = `
<h5>${product}: ${quantity}</h5>
`;
  ul.appendChild(li);
};
/******************* */

const getStoredShoppingCart = () => {
let cart = {};
const storedCart = localStorage.getItem('cart');
if(storedCart){
  cart=JSON.parse(storedCart)
}
return cart;
}
/******************* */

const saveProductToLocalStorage = (product,quantity) => {
  const cart = getStoredShoppingCart();
  cart[product]=quantity
  console.log(cart)
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified)
}

const displayProductFromLocalStorage = () => {
  const saveCart = getStoredShoppingCart();
  for(product in saveCart){
    const quantity = saveCart[product]
    displayProduct(product,quantity)
  }
  
}

displayProductFromLocalStorage()


// let key = prompt('enter properti name');
// let value =prompt('enter property value');
// let obj = {}
// obj[key]=value;
// console.log(objd)
// const objStringified =JSON.parse(obj);
// localStorage.setItem('obj',objStringified)







// const displayProduct = (keyp,valuep) => {
//     const ul = document.getElementById("product-container");
//     const li = document.createElement("li");
//     li.innerHTML = `
//   <h5>${keyp}: ${valuep}</h5>
//   `;
//     ul.appendChild(li);
//   };

//   displayProduct()