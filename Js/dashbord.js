// const products = [
//     {
//       id: 1,
//       name: "Comfortable Sneakers",
//       brand: "Nike",
//       price: 99.99,
//       category: "men",
//       shoesNum: 10,
//       image:"Img/PngItem_2441555 1.png"
    
//     },
//     {
//       id: 2,
//       name: "Elegant High Heels",
//       brand: "Jimmy Choo",
//       price: 149.99,
//       category: "women",
//       shoesNum: 8,
//       image:"Img/PngItem_2441555 1.png"
//     },
//     {
//       id: 3,
//       name: "Classic Leather Loafers",
//       brand: "Gucci",
//       price: 199.99,
//       category: "men",
//       shoesNum: 5,
//       image:"Img/PngItem_2441555 1.png"
//     },
//     {
//       id: 4,
//       name: "Chic Platform Sandals",
//       brand: "Prada",
//       price: 129.99,
//       category: "women",
//       shoesNum: 12,
//       image:"Img/PngItem_2441555 1.png"
//     },
//     // Add more products here
//     {
//       id: 5,
//       name: "Casual Canvas Shoes",
//       brand: "Vans",
//       price: 59.99,
//       category: "men",
//       shoesNum: 20,
//       image:"Img/PngItem_2441555 1.png"
//     },
//     {
//       id: 6,
//       name: "Stylish Wedge Heels",
//       brand: "Steve Madden",
//       price: 89.99,
//       category: "women",
//       shoesNum: 7,
//       image:"Img/PngItem_2441555 1.png"
//     },
//     {
//       id: 7,
//       name: "Sporty Running Shoes",
//       brand: "Adidas",
//       price: 79.99,
//       category: "men",
//       shoesNum: 15,
//       image:"Img/PngItem_2441555 1.png"
//     },
//     {
//       id: 8,
//       name: "Fashionable Mules",
//       brand: "Michael Kors",
//       price: 109.99,
//       category: "women",
//       shoesNum: 9,
//       image:"Img/PngItem_2441555 1.png"
//     },
//     {
//       id: 9,
//       name: "Casual Boat Shoes",
//       brand: "Sperry",
//       price: 69.99,
//       category: "men",
//       shoesNum: 18,
//       image:"Img/PngItem_2441555 1.png"
//     },
//     {
//       id: 10,
//       name: "Elegant Pumps",
//       brand: "Christian Louboutin",
//       price: 249.99,
//       category: "women",
//       shoesNum: 6,
//       image:"Img/PngItem_2441555 1.png"
//     },
//     {
//       id: 11,
//       name: "Classic Oxfords",
//       brand: "Allen Edmonds",
//       price: 189.99,
//       category: "men",
//       shoesNum: 13,
//       image:"Img/PngItem_2441555 1.png"
//     },
//     {
//       id: 12,
//       name: "Trendy Sneakers",
//       brand: "Puma",
//       price: 69.99,
//       category: "women",
//       shoesNum: 14,
//       image:"Img/PngItem_2441555 1.png"
//     },
//     {
//       id: 13,
//       name: "Formal Dress Shoes",
//       brand: "Cole Haan",
//       price: 159.99,
//       category: "men",
//       shoesNum: 8,
//       image:"Img/PngItem_2441555 1.png"
//     },
//     {
//       id: 14,
//       name: "Fashionable Flats",
//       brand: "Tory Burch",
//       price: 119.99,
//       category: "women",
//       shoesNum: 11,
//       image:"Img/PngItem_2441555 1.png"
//     },
//     {
//       id: 15,
//       name: "Outdoor Hiking Boots",
//       brand: "Timberland",
//       price: 129.99,
//       category: "men",
//       shoesNum: 5,
//       image:"Img/PngItem_2441555 1.png"
//     },
//     {
//       id: 16,
//       name: "Glamorous Evening Sandals",
//       brand: "Badgley Mischka",
//       price: 179.99,
//       category: "women",
//       shoesNum: 7,
//       image:"Img/PngItem_2441555 1.png"
//     },
//     {
//       id: 17,
//       name: "Casual Slip-Ons",
//       brand: "Converse",
//       price: 59.99,
//       category: "men",
//       shoesNum: 17,
//       image:"Img/PngItem_2441555 1.png"
//     },
//     {
//       id: 18,
//       name: "Stylish Ankle Boots",
//       brand: "Steve Madden",
//       price: 89.99,
//       category: "women",
//       shoesNum: 9,
//       image:"Img/PngItem_2441555 1.png"
//     },
//     {
//       id: 19,
//       name: "Sporty Sneakers",
//       brand: "New Balance",
//       price: 79.99,
//       category: "men",
//       shoesNum: 12,
//       image:"Img/PngItem_2441555 1.png"
//     },
//     {
//       id: 20,
//       name: "Versatile Ballet Flats",
//       brand: "Sam Edelman",
//       price: 69.99,
//       category: "women",
//       shoesNum: 15,
//       image:"Img/PngItem_2441555 1.png"
//     },
//   ];


const products = [
  {
    id: 1,
    name: "Comfortable Sneakers",
    brand: "Nike",
    price: 99.99,
    category: "men",
    shoesNum: ["40", "41", "42", "43", "44"],
    image: "Img/PngItem_2441555 1.png",
    colors: ["black", "red", "white"],
  },
  // Add more products here...
];


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
  product.shoesNum.forEach((size) => {
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

// ... (rest of the code remains the same)

// Event listener to show product details on hover
document.addEventListener("DOMContentLoaded", function () {
  const productItems = document.querySelectorAll(".item");

  productItems.forEach((productItem) => {
    productItem.addEventListener("mouseover", function () {
      const productId = parseInt(productItem.getAttribute("data-product-id"), 10);
      const product = products.find((item) => item.id === productId);
      if (product) {
        showProductDetailsOnHover(product);
      }
    });

    productItem.addEventListener("mouseout", function () {
      const detailsContainer = document.getElementById("productDetailsContainer");
      detailsContainer.innerHTML = "";
    });
  });

  // ... (rest of the code remains the same)
});





// document.addEventListener("DOMContentLoaded", function () {


//   let cart = [];

//   function showModal(productId) {
//     const product = products.find((item) => item.id === productId);
//     if (!product) return;

//     const modal = document.getElementById("productModal");
//     const modalProductImage = document.getElementById("modalProductImage");
//     const modalProductName = document.getElementById("modalProductName");
//     const modalProductPrice = document.getElementById("modalProductPrice");
//     const colorSelect = document.getElementById("colorSelect");
//     const shoeSizeSelect = document.getElementById("shoeSizeSelect");
//     const addToCartButton = document.getElementById("addToCartButton");

//     modalProductImage.src = product.image;
//     modalProductName.textContent = product.name;
//     modalProductPrice.textContent = `$${product.price.toFixed(2)}`;

//     // Clear previous options from selects
//     colorSelect.innerHTML = "";
//     shoeSizeSelect.innerHTML = "";

//     // Add color options
//     product.colors.forEach((color) => {
//       const option = document.createElement("option");
//       option.value = color;
//       option.textContent = color;
//       colorSelect.appendChild(option);
//     });

//     // Add shoe size options
//     product.shoesNum.forEach((size) => {
//       const option = document.createElement("option");
//       option.value = size;
//       option.textContent = size;
//       shoeSizeSelect.appendChild(option);
//     });

//     addToCartButton.onclick = () => {
//       const selectedColor = colorSelect.value;
//       const selectedShoeSize = shoeSizeSelect.value;
//       // Add the selected product with color and shoe size to the cart
//       cart.push({ ...product, color: selectedColor, shoeSize: selectedShoeSize, quantity: 1 });
//       updateCart();
//       modal.style.display = "none";
//     };

//     modal.style.display = "block";
//   }

//   function displayProducts() {
//     const productsContainer = document.getElementById("productsContainer");

//     products.forEach((product) => {
//       productsContainer.innerHTML += `
//         <div class="main">
//           <div class="product-item ">
//             <img src="${product.image}" alt="Product Image">
//             <p><strong>${product.name}</strong></p>
//             <p>Price: $${product.price.toFixed(2)}</p>
//             <button onclick="showModal(${product.id})">Show Details</button>
//             <button onclick="addToCart(${product.id})">Add to Cart</button>
//           </div>
//         </div>
//       `;
//     });
//   }

//   function addToCart(productId) {
//     const product = products.find((item) => item.id === productId);
//     if (!product) return;

//     // Add the selected product to the cart with default color (the first color in the array) and default shoe size (the first shoe size in the array)
//     cart.push({ ...product, color: product.colors[0], shoeSize: product.shoesNum[0], quantity: 1 });
//     updateCart();
//   }

//   function updateCart() {
//     const cartContainer = document.getElementById("cartContainer");
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
//           <td>${item.quantity}</td>
//           <td>${item.color}</td>
//           <td>${item.shoeSize}</td>
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

//   function incrementQuantity(productId) {
//     const cartItem = cart.find((item) => item.id === productId);
//     if (cartItem) {
//       cartItem.quantity++;
//     }
//     updateCart();
//   }

//   function decrementQuantity(productId) {
//     const cartItem = cart.find((item) => item.id === productId);
//     if (cartItem) {
//       cartItem.quantity--;
//       if (cartItem.quantity <= 0) {
//         removeFromCart(productId);
//       }
//     }
//     updateCart();
//   }
  

//   function removeFromCart(productId) {
//     cart = cart.filter((item) => item.id !== productId);
//     updateCart();
//   }

//   displayProducts();
// });
