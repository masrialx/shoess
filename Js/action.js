const listsImage = document.getElementById("lists");
const listItems = document.querySelector(".navs .list ul");
const anchorElements = document.querySelectorAll(".navs .list ul li a");

let isListsImageVisible = true;

listsImage.addEventListener("click", function() {

  if (isListsImageVisible) {
    listsImage.src = "Img/cancel-svgrepo-com (1).svg";

    listItems.style.height = "auto";
    anchorElements.forEach((anchor) => {
      anchor.style.visibility = "visible";
    });
  } else {
    listsImage.src = "Img/list-bullet-svgrepo-com.svg";

    listItems.style.height = "0";
    anchorElements.forEach((anchor) => {
      anchor.style.visibility = "hidden";
    });
  }
  isListsImageVisible = !isListsImageVisible;
});

// document.getElementById("about-link").addEventListener("click", function (event) {
//   event.preventDefault(); 

//   fetch("about.html")
//     .then((response) => response.text())
//     .then((data) => {
  
//       document.getElementById("content-container").innerHTML = data;
//     })
//     .catch((error) => {
//       console.error("Error fetching content:", error);
//     });
// });

