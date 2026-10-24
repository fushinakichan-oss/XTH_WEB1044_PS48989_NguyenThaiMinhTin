
function renderCheckoutSummary() {
    const summaryContainer = document.getElementById("checkout-items-summary");
    const totalPriceEl = document.getElementById("checkout-total-price");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        window.location.href = "products.html";
        return;
    }

    const formatPrice = (price) => {
        return price.toLocaleString("vi-VN") + " đ";
    };
    let totalPrice = 0;

    let itemsHTML = cart.map(item => {
        let product = products.find((p) => p.id === item.id) || {};
        let name = product.name || item.name || "Sản phẩm";
        let price = product.price || item.price || 0;
        
        let subtotal = price * item.qty;
        totalPrice += subtotal;

        return `
            <div class="checkout-item-mini">
                <span>${name} <strong>(x${item.qty})</strong></span>
                <span style="font-weight: bold;">${formatPrice(subtotal)}</span>
            </div>
        `;
    }).join('');

    summaryContainer.innerHTML = itemsHTML;
    totalPriceEl.textContent = formatPrice(totalPrice);
}

function handleCheckout(event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!fullname || !phone || !address) {
        alert("Vui lòng điền đầy đủ thông tin giao hàng!");
        return;
    }

    localStorage.removeItem("cart");

    alert(`Cảm ơn bạn ${fullname}! Đơn hàng của bạn đã được đặt thành công và sẽ được giao đến:\n${address}`);
    
    window.location.href = "index.html";
}
renderCheckoutSummary();