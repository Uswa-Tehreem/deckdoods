let itemsInCart = [];

const updateCartCount = () => {
    const cartCount = document.getElementById('cart-count');

    if (cartCount) {
        if (itemsInCart.length == 0) {
            cartCount.style.display = 'none';
        }
        else {
            cartCount.style.display = 'block';
        }
        cartCount.innerHTML = itemsInCart.length;
    }
}

const getCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
        itemsInCart = cart;
    }
    else {
        itemsInCart = [];
        localStorage.setItem('cart', JSON.stringify(itemsInCart));
    }
    updateCartCount();
}

const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(itemsInCart));
    updateCartCount();
}

const addToCart = (item, url) => {
    itemsInCart.push(item);
    saveCart();

    if (url) {
        location.href = url;
    }
}

const removeFromCart = (itemIndex, rerender = false) => {
    itemsInCart.splice(itemIndex, 1);
    saveCart();

    if (rerender) {
        renderCart();
    }
}

const clearCart = (rerender = false) => {
    itemsInCart = [];
    saveCart();

    if (rerender) {
        renderCart();
    }
}

getCart();