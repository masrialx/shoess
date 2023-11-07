
const products = [
  {
    id: 1,
    name: "Comfortable Sneakers",
    price: 99.99,
    image: "Img/PngItem_2441555 1.png",
    colors: ["Black", "Red", "White"],
    shoeSizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 79.99,
    image: "Img/PngItem_5030286 1.png",
    colors: ["Blue", "Gray", "Green"],
    shoeSizes: ["38", "39", "40", "41", "42"]
  },
  {
    id: 3,
    name: "Casual Loafers",
    price: 59.99,
    image: "Img/unsplash_LG88A2XgIXY.png",
    colors: ["Brown", "Beige", "Navy"],
    shoeSizes: ["39", "40", "41", "42", "43"]
  },
  {
    id: 4,
    name: "Sports Sandals",
    price: 49.99,
    image: "Img/PngItem_2441555 1.png",
    colors: ["Black", "Blue", "Gray"],
    shoeSizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 5,
    name: "Classic Oxfords",
    price: 89.99,
    image: "Img/PngItem_3578282.png",
    colors: ["Black", "Brown", "Tan"],
    shoeSizes: ["38", "39", "40", "41", "42"]
  },
  {
    id: 6,
    name: "High-Top Sneakers",
    price: 109.99,
    image: "Img/PngItem_2441597.png",
    colors: ["White", "Black", "Red"],
    shoeSizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 7,
    name: "Slip-On Sandals",
    price: 45.99,
    image: "Img/PngItem_1609496.png",
    colors: ["Blue", "Gray", "Green"],
    shoeSizes: ["38", "39", "40", "41", "42"]
  },
  {
    id: 8,
    name: "Formal Dress Shoes",
    price: 129.99,
    image: "Img/PngItem_1093681 1.png",
    colors: ["Black", "Brown", "Navy"],
    shoeSizes: ["39", "40", "41", "42", "43"]
  },
  {
    id: 9,
    name: "Fashionable Sneakers",
    price: 94.99,
    image: "Img/PngItem_1093681 1.png",
    colors: ["White", "Gray", "Pink"],
    shoeSizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 10,
    name: "Canvas Slip-Ons",
    price: 54.99,
    image: "Img/PngItem_1609496.png",
    colors: ["Blue", "Red", "Beige"],
    shoeSizes: ["38", "39", "40", "41", "42"]
  },
];



// Cart section visibility toggle
const cartSection = document.getElementById("cartSection");
const ioxImage = document.getElementById("iox");
const lists = document.getElementById("listt");
ioxImage.addEventListener("click", function () {
  cartSection.style.visibility = "hidden";
});

lists.addEventListener("click", function () {
  cartSection.style.visibility = "visible";
});






// Function to show product detail modal
function showModal(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  
  
  
  const modalProductName = document.getElementById("modalProductName");
  const modalProductImage = document.getElementById("modalProductImage");
  const modalProductPrice = document.getElementById("modalProductPrice");
  const colorSelect = document.getElementById("colorSelect");
  const sizeSelect = document.getElementById("sizeSelect");
  const addToCartButton = document.getElementById("addToCartButton");

  modalProductName.textContent = product.name;
  modalProductImage.src = product.image;
  modalProductPrice.textContent = `Price: $${product.price.toFixed(2)}`;

  // Populate color and size options
  colorSelect.innerHTML = "";
  product.colors.forEach((color) => {
    const option = document.createElement("option");
    option.textContent = color;
    colorSelect.appendChild(option);
  });

  sizeSelect.innerHTML = "";
  product.sizes.forEach((size) => {
    const option = document.createElement("option");
    option.textContent = size;
    sizeSelect.appendChild(option);
  });

  // Show the modal
  const productModal = document.getElementById("productModal");
  productModal.style.display = "block";

  // Add click event listener to the close button of the modal
  const closeModalButton = document.getElementsByClassName("close")[0];
  closeModalButton.addEventListener("click", () => {
    productModal.style.display = "none";
  });

  // Add click event listener to the Add to Cart button of the modal
  addToCartButton.addEventListener("click", () => {
    // Get selected color and size
    const selectedColor = colorSelect.value;
    const selectedSize = sizeSelect.value;

    // Add the selected product to the cart
    addToCart(productId, selectedColor, selectedSize);

    // Close the modal after adding to cart
    productModal.style.display = "none";
  });
}

// Function to add a product to the cart
function addToCart(productId, color, size) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const cartItem = cart.find((item) => item.id === productId && item.color === color && item.size === size);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, color, size, quantity: 1 });
  }

  updateCart();
}

// Function to remove a product from the cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCart();
}

// Function to update the cart in the HTML
function updateCart() {
  const cartContainer = document.getElementById("cartContainer");
  cartContainer.innerHTML = "";

  let total = 0;
  let totalQuantity = 0;
  let totalProducts = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    totalQuantity += item.quantity;
    totalProducts++;

    cartContainer.innerHTML += `
      <tr class="cart-item">
        <td><img src="${item.image}" alt="Product Image"></td>
        <td class="nm">${item.name}</td>
        <td class="pr">$${item.price.toFixed(2)}</td>
        <td>
          <button class="dec" onclick="decrementQuantity(${item.id})">-</button>
          <span>${item.quantity}</span>
          <button class="inc" onclick="incrementQuantity(${item.id})">+</button>
        </td>
        <td class="tot">$${itemTotal.toFixed(2)}</td>
        <td><button class="rm" onclick="removeFromCart(${item.id})">Remove</button></td>
      </tr>
    `;
  });

  function filterProducts(category) {
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    displayProducts(filteredProducts);
  }
  
  

  const totalElement = document.getElementById("total");
  totalElement.textContent = total.toFixed(2);

  const totalQuantityElement = document.querySelector(".notf.quantity");
  totalQuantityElement.textContent = totalQuantity;

  const totalProductsElement = document.querySelector(".notf.totalProducts");
  totalProductsElement.textContent = totalProducts;
}

// Function to increment the quantity of a product in the cart
function incrementQuantity(productId) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity++;
  }
  updateCart();
}

// Function to decrement the quantity of a product in the cart
function decrementQuantity(productId) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity--;
    if (cartItem.quantity <= 0) {
      removeFromCart(productId);
    }
  }
  updateCart();
}



function filterProducts(category) {
  const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
  displayProducts(filteredProducts);
}



// Function to display products in the container
function displayProducts(productsToShow) {
  const productsContainer = document.getElementById('productsContainer');
  productsContainer.innerHTML = '';

  productsToShow.forEach(product => {
    const productHTML = `
    <div class="main">
    <div class="item rnd-abc1">
      <img src="${product.image}" alt="Product Image" class="item-image rnd-abc2">
      <p class="item-title rnd-abc3"><strong>${product.name}</strong></p>
      <p class="item-price rnd-abc4">Price: $${product.price.toFixed(2)}</p>
      
      <select class="color-select">
        <option value="">Select Color</option>
        ${product.colors.map(color => `<option value="${color}">${color}</option>`).join("")}
      </select>
      
      <select class="size-select">
        <option value="">Select Size</option>
        ${product.shoeSizes.map(size => `<option value="${size}">${size}</option>`).join("")}
      </select>
      
      <button class="add-to-cart-btn rnd-abc5" onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  </div>
  
  
  
`;

  

    productsContainer.innerHTML += productHTML;
  });
}



// Event listener to prevent default form submission behavior
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
    });
  });
});

// Call the initial display with all products
displayProducts(products);

// Initialize cart as an empty array
let cart = [];
























 //Function to save product data in localStorage

  
  // const cartSection = document.getElementById("cartSection");
  // const ioxImage = document.getElementById("iox");
  // const lists = document.getElementById("listt");
  // ioxImage.addEventListener("click", function() {

  //     cartSection.style.visibility = "hidden";
   
  // });
  // lists.addEventListener("click", function() {
  //     cartSection.style.visibility = "visible";
 
  // });
 
  // function addToCart(productId) {
  //   const product = products.find(item => item.id === productId);
  //   if (!product) return;
  
  //   const cartItem = cart.find(item => item.id === productId);
  //   if (cartItem) {
  //     cartItem.quantity++;
  //   } else {
  //     cart.push({ ...product, quantity: 1 });
  //   }
  
  //   updateCart();
  // }
  
  // // Function to remove a product from the cart
  // function removeFromCart(productId) {
  //   cart = cart.filter(item => item.id !== productId);
  //   updateCart();
  // }
  
  // // Function to update the cart in the HTML


  

  // function updateCart() {
  //   const cartContainer = document.getElementById("cartContainer");
  //   cartContainer.innerHTML = "";
  
  //   let total = 0;
  //   let totalQuantity = 0;
  //   let totalProducts = 0;
    
  //   cart.forEach(item => {
  //     const itemTotal = item.price * item.quantity;
  //     total += itemTotal;
  //     totalQuantity += item.quantity;
  //     totalProducts++;

  //     cartContainer.innerHTML += `
  //     <tr class="cart-item">
  //       <td><img src="${item.image}" alt="Product Image"></td>
  //       <td class="nm">${item.name}</td>
  //       <td class="pr">$${item.price.toFixed(2)}</td>
  //       <td>
  //         <button class="dec" onclick="decrementQuantity(${item.id})">-</button>
  //         <span>${item.quantity}</span>
  //         <button class="inc" onclick="incrementQuantity(${item.id})">+</button>
  //       </td>
  //       <td class="tot">$${itemTotal.toFixed(2)}</td>
  //       <td><button class="rm" onclick="removeFromCart(${item.id})">Remove</button></td>
  //     </tr>
  //   `;
  // });

 
  


  //   //   cartContainer.innerHTML += `
  //   //     <div class="cart-item">
  //   //       <img src="${item.image}" alt="Product Image">

  //   const totalElement = document.getElementById("total");
  //   totalElement.textContent = total.toFixed(2);
    
  //   const totalQuantityElement = document.querySelector(".notf.quantity");
  //   totalQuantityElement.textContent = totalQuantity;
    
  //   const totalProductsElement = document.querySelector(".notf.totalProducts");
  //   totalProductsElement.textContent = totalProducts;
 
  // }
  
  // // Function to increment the quantity of a product in the cart
  // function incrementQuantity(productId) {
  //   const cartItem = cart.find(item => item.id === productId);
  //   if (cartItem) {
  //     cartItem.quantity++;
  //   }
  //   updateCart();
  // }
  
  // // Function to decrement the quantity of a product in the cart
  // function decrementQuantity(productId) {
  //   const cartItem = cart.find(item => item.id === productId);
  //   if (cartItem) {
  //     cartItem.quantity--;
  //     if (cartItem.quantity <= 0) {
  //       removeFromCart(productId);
  //     }
  //   }
  //   updateCart();
  // }
  
  // // Initialize cart as an empty array
  // let cart = [];
  
  // // Function to display products in the product section
  // function displayProducts() {
  //   const productsContainer = document.getElementById("productsContainer");
  
  //   products.forEach(product => {
  //     productsContainer.innerHTML += `
  //     <div class="main">
  //       <div class="product-item ">
  //         <img src="${product.image}" alt="Product Image">
  //         <p><strong>${product.name}</strong></p>
  //         <p>Price: $${product.price.toFixed(2)}</p>
  //         <button onclick="addToCart(${product.id})">Add to Cart</button>
  //       </div>
  //       </div>
  //     `;
  //   });
  // }
  
  // // Call the displayProducts function to show the products
  // displayProducts();
  




  // function saveProductsToStorage() {
  //   localStorage.setItem("products", JSON.stringify(products));
  // }
  
  // // Function to get product data from localStorage
  // function getProductsFromStorage() {
  //   const storedProducts = localStorage.getItem("products");
  //   return storedProducts ? JSON.parse(storedProducts) : [];
  // }
  
  // // Existing product data
  // products = getProductsFromStorage();
  
  // // Function to display products in the product section
  // // ... Rest of the code ...
  
  
  //   // Function to display products in the product section
  //   function displayProducts() {
  //     const productsContainer = document.getElementById("productsContainer");
  //     productsContainer.innerHTML = ""; // Clear the container before adding products
  
  //     const searchFilters = getSearchFilters();
  
  //     if (!searchFilters.brand && !searchFilters.gender && !searchFilters.productName) {
  //       // No filters applied, display all products
  //       products.forEach(product => {
  //         productsContainer.innerHTML += `
  //           <div class="main">
  //             <div class="product-item ">
  //               <img src="${product.image}" alt="Product Image">
  //               <p><strong>${product.name}</strong></p>
  //               <p>Price: $${product.price.toFixed(2)}</p>
  //               <button onclick="addToCart(${product.id})">Add to Cart</button>
  //             </div>
  //           </div>
  //         `;
  //       });
  //     } else {
  //       // Filters applied, display filtered products
  //       const filteredProducts = products.filter(product => {
  //         const brandMatch = !searchFilters.brand || product.brand === searchFilters.brand;
  //         const genderMatch = !searchFilters.gender || product.category === searchFilters.gender;
  //         const nameMatch = !searchFilters.productName || product.name.toLowerCase().includes(searchFilters.productName);
  
  //         return brandMatch && genderMatch && nameMatch;
  //       });
  
  //       filteredProducts.forEach(product => {
  //         productsContainer.innerHTML += `
  //           <div class="main">
  //             <div class="product-item ">
  //               <img src="${product.image}" alt="Product Image">
  //               <p><strong>${product.name}</strong></p>
  //               <p>Price: $${product.price.toFixed(2)}</p>
  //               <button onclick="addToCart(${product.id})">Add to Cart</button>
  //             </div>
  //           </div>
  //         `;
  //       });
  //     }
  //   }
  
  //   // Function to get search filters from user inputs
  //   function getSearchFilters() {
  //     const brandSelect = document.getElementById("brandSelect").value;
  //     const genderRadio = document.querySelector('input[name="gender"]:checked').value;
  //     const productNameInput = document.getElementById("productNameInput").value.toLowerCase();
  
  //     return {
  //       brand: brandSelect,
  //       gender: genderRadio,
  //       productName: productNameInput
  //     };
  //   }
  
  //   // Call the displayProducts function to show the products
  //   displayProducts();
  
  //   // Cart section visibility toggle
  //   const cartSection = document.querySelector(".cart");
  //   const ioxImage = document.querySelector(".iox");
  //   const lists = document.querySelector("#listt");
  
  //   ioxImage.addEventListener("click", function () {
  //     cartSection.style.visibility = "hidden";
  //   });
  
  //   lists.addEventListener("click", function () {
  //     cartSection.style.visibility = "visible";
  //   });
  
  //   // Function to add a product to the cart
  //   function addToCart(productId) {
  //     const product = products.find(item => item.id === productId);
  //     if (!product) return;
  
  //     const cartItem = cart.find(item => item.id === productId);
  //     if (cartItem) {
  //       cartItem.quantity++;
  //     } else {
  //       cart.push({ ...product, quantity: 1 });
  //     }
  
  //     updateCart();
  //   }
  
  //   // Function to remove a product from the cart
  //   function removeFromCart(productId) {
  //     cart = cart.filter(item => item.id !== productId);
  //     updateCart();
  //   }
  
  //   // Function to update the cart in the HTML
  //   function updateCart() {
  //     const cartContainer = document.querySelector(".cart-table tbody");
  //     cartContainer.innerHTML = "";
  
  //     let total = 0;
  //     let totalQuantity = 0;
  //     let totalProducts = 0;
  
  //     cart.forEach(item => {
  //       const itemTotal = item.price * item.quantity;
  //       total += itemTotal;
  //       totalQuantity += item.quantity;
  //       totalProducts++;
  
  //       cartContainer.innerHTML += `
  //         <tr class="cart-item">
  //           <td><img src="${item.image}" alt="Product Image"></td>
  //           <td class="nm">${item.name}</td>
  //           <td class="pr">$${item.price.toFixed(2)}</td>
  //           <td>
  //             <button class="dec" onclick="decrementQuantity(${item.id})">-</button>
  //             <span>${item.quantity}</span>
  //             <button class="inc" onclick="incrementQuantity(${item.id})">+</button>
  //           </td>
  //           <td class="tot">$${itemTotal.toFixed(2)}</td>
  //           <td><button class="rm" onclick="removeFromCart(${item.id})">Remove</button></td>
  //         </tr>
  //       `;
  //     });
  
  //     const totalElement = document.getElementById("total");
  //     totalElement.textContent = total.toFixed(2);
  
  //     const totalQuantityElement = document.querySelector(".notf.quantity");
  //     totalQuantityElement.textContent = totalQuantity;
  
  //     const totalProductsElement = document.querySelector(".notf.totalProducts");
  //     totalProductsElement.textContent = totalProducts;
  //   }
  
  //   // Function to increment the quantity of a product in the cart
  //   function incrementQuantity(productId) {
  //     const cartItem = cart.find(item => item.id === productId);
  //     if (cartItem) {
  //       cartItem.quantity++;
  //     }
  //     updateCart();
  //   }
  
  //   // Function to decrement the quantity of a product in the cart
  //   function decrementQuantity(productId) {
  //     const cartItem = cart.find(item => item.id === productId);
  //     if (cartItem) {
  //       cartItem.quantity--;
  //       if (cartItem.quantity <= 0) {
  //         removeFromCart(productId);
  //       }
  //     }
  //     updateCart();
  //   }
  
  //   // Initialize cart as an empty array
  //   let cart = [];
  
  //   // Function to handle search based on user inputs
  //   function searchProducts() {
  //     const searchFilters = getSearchFilters();
  
  //     // Save search filters to localStorage
  //     localStorage.setItem("searchFilters", JSON.stringify(searchFilters));
  
  //     displayProducts();
  //   }
  