
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