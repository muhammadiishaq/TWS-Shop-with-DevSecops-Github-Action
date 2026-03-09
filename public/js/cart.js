let cart = [];

function addToCart(name, price) {

cart.push({ name, price });

updateCart();

alert(name + " added to cart 🛒");

}

function updateCart() {

const cartCount = document.getElementById("cart-count");

if (cartCount) {
cartCount.innerText = cart.length;
}

}

function viewCart() {

if (cart.length === 0) {
alert("Your cart is empty 🛒");
return;
}

let message = "Cart Items:\n\n";

cart.forEach((item, index) => {
message += (index + 1) + ". " + item.name + " - $" + item.price + "\n";
});

alert(message);

}