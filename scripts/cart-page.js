const ITEM_IMAGES = {
    'board1': '/assets/img/product/1.1.jpeg',
    'board2': '/assets/img/product/2.1.jpeg',
    'board3': '/assets/img/product/3.1.jpeg',
}

const itemTemplate = (imageUrl, n) => `
    <div class="item">
        <img src="${imageUrl}" alt="">
        <div>
        <div>Japanese Koi Karper Fish Design Skateboard</div>
        <button onclick="removeFromCart(${n}, true)">Remove from cart</button>
        </div>
    </div>
`;

const renderCart = () => {
    const cartList = document.getElementById('cart-list');
    const cart = JSON.parse(localStorage.getItem('cart'));

    if (cart && cart.length) {
        cartList.innerHTML = '';
        cart.forEach((item, n) => {
            cartList.innerHTML += itemTemplate(ITEM_IMAGES[item], n);
        });
    } else {
        cartList.innerHTML = 'No items in cart';
    }
};

renderCart();