// JavaScript code
// Define an array of product objects
const product = [
    {
      imgSrc: "Img/pngwing 2 - Copy.png",
      name: "Nike Shoes Air Max",
      price: "3500birr",
    },
    {
      imgSrc: "Img/pngwing 3 - Copy.png",
      name: "Nike Shoes Air Max",
      price: "4500birr",
    },
    {
      imgSrc: "Img/pngwing 5 - Copy.png",
      name: "Nike Shoes Air Max",
      price: "2500birr",
    },
    {
      imgSrc: "Img/pngwing 4 - Copy.png",
      name: "Nike Shoes Air Max",
      price: "4700birr",
    },
  ];
  
  // Function to generate dynamic HTML based on the product array
  function generateProductHTML() {
    const productContainer = document.getElementById("productContainer");
    
    product.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("top");
      
      const imgElement = document.createElement("img");
      imgElement.src = product.imgSrc;
      imgElement.alt = "image";
      productDiv.appendChild(imgElement);
      
      const nameDiv = document.createElement("div");
      nameDiv.textContent = product.name;
      productDiv.appendChild(nameDiv);
      
      const priceDiv = document.createElement("div");
      priceDiv.textContent = product.price;
      productDiv.appendChild(priceDiv);
      
      const buyButton = document.createElement("button");
      buyButton.textContent = "Buy";
      productDiv.appendChild(buyButton);
      
      // Add classes to specific elements
      imgElement.classList.add("product-image");
      nameDiv.classList.add("product-name");
      priceDiv.classList.add("product-price");
      buyButton.classList.add("buy-button");
      
      productContainer.appendChild(productDiv);
    });
  }
  
  // Call the function to generate the dynamic HTML
  generateProductHTML();
  