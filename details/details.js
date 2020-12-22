

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}



// function return cart count
function countCart() {
  var count = 0;
  if (sessionStorage.getItem("cart")) {
    var cart = JSON.parse(sessionStorage.getItem("cart"));
    cart.forEach(element => {
      count = +count + +element.quantity;
    });
  }
  return count;
}


function addCart(name, price, id, sex) {
  if (sessionStorage.getItem("cart") == null) {
    var cart = [];
    sessionStorage.setItem("cart", cart);
  }
  else var cart = JSON.parse(sessionStorage.getItem("cart"));

  var size = document.getElementById("s" + id).value;
  var quan = document.getElementById("q" + id).value;
  var same = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === name && cart[i].size === size) {
      cart[i].quantity = +cart[i].quantity + +quan;
      same = true; break;
    }
  }
  if (!same) {
    var obj = {};
    obj.name = name;
    obj.price = price;
    obj.quantity = quan;
    obj.size = size;
    obj.img = "../list-products/images/" + id + ".jpg";
    obj.sex = sex;
    obj.id = id;
    cart.push(obj)
  }
  sessionStorage.setItem("cart", JSON.stringify(cart));
  // document.getElementById("cart-count").innerHTML = countCart();
  location.reload();
}