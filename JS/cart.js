// Danh sách sản phẩm đầy đủ của TTGSHOP
const products = [
    // ==========================================
    // 1. DANH MỤC LAPTOP
    // ==========================================
    {
        id: 1,
        name: "Laptop Gaming ASUS ROG Strix G16",
        price: 35990000,
        oldPrice: 38990000,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
        shortDescription: "CPU Intel Core i7 thế hệ mới, RTX 4060, màn hình 165Hz siêu mượt.",
        longDescription: "Laptop Gaming cấu hình cực mạnh với CPU Intel Core i7 thế hệ mới, card đồ họa RTX 4060, màn hình 165Hz siêu mượt mà.",
        category: "laptop",
        stock: 15,
        hot: true,
        newProduct: false,
        sale: true
    },
    {
        id: 2,
        name: "Laptop Văn Phòng Dell XPS 13 Ultra",
        price: 28500000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Thiết kế mỏng nhẹ, vỏ nhôm nguyên khối, màn hình OLED sắc nét.",
        longDescription: "Thiết kế siêu mỏng nhẹ, sang trọng vỏ nhôm nguyên khối, màn hình OLED độ phân giải cao sắc nét.",
        category: "laptop",
        stock: 20,
        hot: false,
        newProduct: false,
        sale: false
    },
    {
        id: 9,
        name: "Laptop Lenovo Legion Slim 5 i7 / RTX 4050",
        price: 26990000,
        oldPrice: 28990000,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Tản nhiệt cực tốt, thích hợp vừa làm đồ họa vừa chiến game nặng.",
        longDescription: "Thiết kế mỏng nhẹ nhưng sở hữu tản nhiệt cực tốt, thích hợp vừa làm đồ họa vừa chiến game nặng.",
        category: "laptop",
        stock: 12,
        hot: false,
        newProduct: true,
        sale: true
    },
    {
        id: 10,
        name: "Laptop MacBook Air M2 16GB / 256GB",
        price: 24990000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Mỏng nhẹ thời trang, pin trâu lên đến 18 tiếng, màn hình Retina.",
        longDescription: "Mỏng nhẹ thời trang, pin trâu lên đến 18 tiếng, màn hình Retina cực kỳ sắc nét.",
        category: "laptop",
        stock: 25,
        hot: true,
        newProduct: false,
        sale: false
    },
    {
        id: 17,
        name: "Laptop Acer Predator Helios Neo 16",
        price: 33990000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Chip Intel i7 thế hệ 13, RTX 4060, tản nhiệt quạt kim loại lỏng.",
        longDescription: "Hiệu năng mạnh mẽ với chip Intel Core i7 thế hệ 13 và card RTX 4060.",
        category: "laptop",
        stock: 8,
        hot: false,
        newProduct: true,
        sale: false
    },
    {
        id: 18,
        name: "Laptop HP Envy x360 14 inch OLED Cảm Ứng",
        price: 23490000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Laptop xoay gập 360 độ, màn hình OLED rực rỡ, cảm ứng đa điểm.",
        longDescription: "Laptop xoay gập 360 độ tiện lợi, màn hình OLED rực rỡ, thích hợp cho dân thiết kế đồ họa.",
        category: "laptop",
        stock: 14,
        hot: false,
        newProduct: false,
        sale: false
    },
    {
        id: 19,
        name: "Laptop MSI Prestige 14 AI Evo",
        price: 27990000,
        oldPrice: 29990000,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Tích hợp AI tiên tiến, siêu nhẹ, pin lâu đáp ứng di chuyển liên tục.",
        longDescription: "Tích hợp công nghệ AI tiên tiến, trọng lượng cực nhẹ, pin ấn tượng.",
        category: "laptop",
        stock: 10,
        hot: false,
        newProduct: true,
        sale: true
    },
    {
        id: 20,
        name: "Laptop ASUS Zenbook 14 OLED",
        price: 22990000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Thiết kế cao cấp siêu mỏng, màn hình Lumina OLED sắc màu chuẩn xác.",
        longDescription: "Thiết kế cao cấp siêu mỏng, màn hình Lumina OLED sắc màu chuẩn xác, âm thanh Harman Kardon.",
        category: "laptop",
        stock: 16,
        hot: true,
        newProduct: false,
        sale: false
    },

    // ==========================================
    // 2. DANH MỤC PC GAMING
    // ==========================================
    {
        id: 3,
        name: "PC Gaming TTG Ultra - i5 13400F / RTX 4060",
        price: 18500000,
        oldPrice: 19900000,
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Chiến mượt mọi tựa game AAA ở độ phân giải Full HD / 2K.",
        longDescription: "Bộ PC Gaming tối ưu chi phí hiệu năng, chiến mượt mọi tựa game AAA hiện nay.",
        category: "pc-gaming",
        stock: 10,
        hot: true,
        newProduct: false,
        sale: true
    },
    {
        id: 4,
        name: "PC Gaming TTG Streamer - i7 14700K / RTX 4070",
        price: 32500000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Dành riêng cho Streamer, xử lý đồ họa 3D, dựng phim và livestream.",
        longDescription: "Cấu hình khủng dành riêng cho Streamer và Creator, xử lý đồ họa 3D.",
        category: "pc-gaming",
        stock: 6,
        hot: true,
        newProduct: false,
        sale: false
    },
    {
        id: 11,
        name: "PC Gaming TTG Entry - i3 12100F / GTX 1650",
        price: 9800000,
        oldPrice: 10500000,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Phân khúc giá rẻ cực kỳ phù hợp cho học sinh chơi mượt LOL, CS2.",
        longDescription: "Dàn PC Gaming phân khúc giá rẻ cực kỳ phù hợp cho học sinh, sinh viên.",
        category: "pc-gaming",
        stock: 30,
        hot: false,
        newProduct: false,
        sale: true
    },
    {
        id: 12,
        name: "PC Gaming TTG Supreme - Ryzen 7 7800X3D / RTX 4080 Super",
        price: 54900000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Siêu cấu hình chơi game đỉnh cao với CPU gaming tốt nhất thế giới.",
        longDescription: "Siêu cấu hình chơi game đỉnh cao với CPU chơi game tốt nhất thế giới.",
        category: "pc-gaming",
        stock: 4,
        hot: true,
        newProduct: false,
        sale: false
    },
    {
        id: 21,
        name: "PC Gaming TTG Beast - i5 14400F / RTX 4060 Ti",
        price: 21500000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Hiệu năng vượt trội tầm giá 20tr, LED RGB bắt mắt và tản mát.",
        longDescription: "Hiệu năng vượt trội trong tầm giá 20 triệu, trang bị LED RGB bắt mắt.",
        category: "pc-gaming",
        stock: 12,
        hot: false,
        newProduct: true,
        sale: false
    },
    {
        id: 22,
        name: "PC Gaming TTG Cyber - Ryzen 5 5600 / RX 6600",
        price: 13900000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Lựa chọn kinh tế tối ưu cho game thủ phổ thông.",
        longDescription: "Lựa chọn kinh tế tối ưu cho game thủ phổ thông, cân bằng cực tốt.",
        category: "pc-gaming",
        stock: 18,
        hot: false,
        newProduct: false,
        sale: false
    },
    {
        id: 23,
        name: "PC Gaming TTG Titan - i9 14900KF / RTX 4090",
        price: 89900000,
        oldPrice: 95000000,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Đỉnh cao công nghệ PC, sức mạnh tuyệt đối render 3D và 4K max setting.",
        longDescription: "Đỉnh cao công nghệ PC hiện tại, sức mạnh tuyệt đối phục vụ render 3D.",
        category: "pc-gaming",
        stock: 2,
        hot: true,
        newProduct: false,
        sale: true
    },
    {
        id: 24,
        name: "PC Gaming TTG Phantom - Ryzen 7 7700 / RTX 4070 Ti Super",
        price: 41500000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Tông màu đen hầm hố, VRAM lớn xử lý đồ họa mượt mà.",
        longDescription: "Dàn PC phân khúc cao cấp sở hữu tông màu đen hầm hố, card màn hình dung lượng lớn.",
        category: "pc-gaming",
        stock: 7,
        hot: false,
        newProduct: true,
        sale: false
    },

    // ==========================================
    // 3. DANH MỤC PC VĂN PHÒNG (Sửa thành "pc-office")
    // ==========================================
    {
        id: 5,
        name: "PC Văn Phòng TTG Office Pro - i3 12100 / 16GB RAM",
        price: 8900000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Gọn nhẹ, bền bỉ 24/7, xử lý mượt tác vụ văn phòng và kế toán.",
        longDescription: "Giải pháp PC gọn nhẹ, hoạt động bền bỉ 24/7, xử lý mượt mà mọi tác vụ văn phòng.",
        category: "pc-office", // Khớp với HTML
        stock: 22,
        hot: false,
        newProduct: false,
        sale: false
    },
    {
        id: 13,
        name: "PC Văn Phòng TTG Slim - Pentium Gold / 8GB RAM",
        price: 5200000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Tối ưu chi phí cho nhập liệu, soạn thảo văn bản và học online.",
        longDescription: "Cấu hình tối ưu chi phí cho công việc nhập liệu, duyệt web.",
        category: "pc-office", // Khớp với HTML
        stock: 15,
        hot: false,
        newProduct: false,
        sale: false
    },
    {
        id: 14,
        name: "PC Văn Phòng TTG Duo Screen - i5 12400 / 16GB / SSD 512GB",
        price: 11500000,
        oldPrice: 12500000,
        image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Đa nhiệm mượt mà, hỗ trợ xuất 2 đến 3 màn hình làm việc cùng lúc.",
        longDescription: "Cấu hình đa nhiệm mượt mà, hỗ trợ xuất 2 đến 3 màn hình làm việc.",
        category: "pc-office", // Khớp với HTML
        stock: 11,
        hot: true,
        newProduct: false,
        sale: true
    },
    {
        id: 15,
        name: "PC All-In-One TTG WorkSpace 24 inch i5 13400",
        price: 14200000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Tất cả trong một gọn gàng, tích hợp màn hình 24 inch IPS và loa.",
        longDescription: "Máy tính tất cả trong một siêu gọn gàng, tích hợp sẵn màn hình 24 inch Full HD IPS.",
        category: "pc-office", // Khớp với HTML
        stock: 8,
        hot: false,
        newProduct: true,
        sale: false
    },
    {
        id: 25,
        name: "PC Văn Phòng TTG Business i5 13500 / 16GB",
        price: 12800000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Dành cho doanh nghiệp cần sự ổn định, chạy ứng dụng quản lý.",
        longDescription: "Dành riêng cho doanh nghiệp cần sự ổn định cao, chạy nhiều ứng dụng quản lý.",
        category: "pc-office", // Khớp với HTML
        stock: 19,
        hot: false,
        newProduct: false,
        sale: false
    },
    {
        id: 26,
        name: "PC Văn Phòng TTG Mini Desk Ryzen 3 4300G",
        price: 6800000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Kích thước siêu nhỏ gọn, tiết kiệm diện tích bàn làm việc.",
        longDescription: "Kích thước siêu nhỏ gọn tiết kiệm diện tích bàn làm việc.",
        category: "pc-office", // Khớp với HTML
        stock: 13,
        hot: false,
        newProduct: false,
        sale: false
    },
    {
        id: 27,
        name: "PC All-In-One TTG Pro 27 inch i7 12700H",
        price: 18900000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Màn hình 27 inch sắc nét, xử lý mượt công việc văn phòng nặng.",
        longDescription: "Màn hình lớn 27 inch sắc nét, cấu hình cao cấp xử lý nhanh chóng.",
        category: "pc-office", // Khớp với HTML
        stock: 5,
        hot: false,
        newProduct: true,
        sale: false
    },
    {
        id: 28,
        name: "PC Văn Phòng TTG Enterprise i7 13700 / 32GB RAM",
        price: 17500000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Cấu hình mạnh mẽ cho quản lý, chạy máy ảo, xử lý Excel cực lớn.",
        longDescription: "Cấu hình mạnh mẽ cho quản lý, chạy máy ảo, xử lý dữ liệu lớn.",
        category: "pc-office", // Khớp với HTML
        stock: 9,
        hot: true,
        newProduct: false,
        sale: false
    },

    // ==========================================
    // 4. DANH MỤC LINH KIỆN (Sửa thành "components")
    // ==========================================
    {
        id: 6,
        name: "Màn Hình Gaming ASUS TUF VG27AQ 27 inch 2K 165Hz",
        price: 6490000,
        oldPrice: 6990000,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Màn hình IPS 2K siêu nét, 165Hz, G-Sync chống xé hình.",
        longDescription: "Màn hình chuyên game IPS 2K siêu nét, tần số quét 165Hz kết hợp G-Sync.",
        category: "components", // Khớp với HTML
        stock: 14,
        hot: true,
        newProduct: false,
        sale: true
    },
    {
        id: 7,
        name: "Card Màn Hình MSI RTX 4080 Super Gaming X Slim 16G",
        price: 31990000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Kiến trúc Ada Lovelace, DLSS 3, chiến game 4K đỉnh cao.",
        longDescription: "VGA siêu cấp RTX 4080 Super cân tốt mọi tựa game AAA ở độ phân giải 4K.",
        category: "components", // Khớp với HTML
        stock: 5,
        hot: true,
        newProduct: false,
        sale: false
    },
    {
        id: 8,
        name: "Bàn Phím Cơ Custom TTG Pro Wireless RGB",
        price: 1450000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Không dây 3 chế độ kết nối, switch hotswap, LED RGB đẹp mắt.",
        longDescription: "Bàn phím cơ không dây 3 chế độ kết nối, mạch hotswap dễ dàng thay switch.",
        category: "components", // Khớp với HTML
        stock: 40,
        hot: false,
        newProduct: false,
        sale: false
    },
    {
        id: 16,
        name: "Tai Nghe Gaming HyperX Cloud III Wireless",
        price: 3290000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Không dây pin trâu lên đến 120 giờ, âm thanh vòm DTS 3D.",
        longDescription: "Tai nghe không dây pin cực trâu lên đến 120 giờ sử dụng liên tục.",
        category: "components", // Khớp với HTML
        stock: 12,
        hot: false,
        newProduct: false,
        sale: false
    },
    {
        id: 29,
        name: "CPU Intel Core i5 13600K (Up to 5.1GHz, 14 Nhân 20 Luồng)",
        price: 7690000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Hiệu năng cao cho chơi game và đồ họa, hỗ trợ ép xung.",
        longDescription: "Bộ vi xử lý hiệu năng cao cho cả chơi game và làm việc đồ họa chuyên nghiệp.",
        category: "components", // Khớp với HTML
        stock: 15,
        hot: true,
        newProduct: false,
        sale: false
    },
    {
        id: 30,
        name: "Ổ Cứng SSD Kingston KC3000 M.2 NVMe Gen 4 1TB",
        price: 2190000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Tốc độ đọc ghi 7000MB/s, load game và phần mềm cực nhanh.",
        longDescription: "Tốc độ đọc ghi siêu tốc lên đến 7000MB/s chuẩn Gen 4x4.",
        category: "components", // Khớp với HTML
        stock: 25,
        hot: false,
        newProduct: true,
        sale: false
    },
    {
        id: 31,
        name: "RAM Corsair Vengeance RGB 32GB (2x16GB) DDR5 6000MHz",
        price: 3490000,
        oldPrice: 0,
        image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
        shortDescription: "DDR5 bus cao 6000MHz, LED RGB sống động, tối ưu hiệu năng PC.",
        longDescription: "Bộ nhớ RAM DDR5 thế hệ mới dung lượng 32GB giúp máy tính đa nhiệm mượt mà.",
        category: "components", // Khớp với HTML
        stock: 17,
        hot: false,
        newProduct: true,
        sale: false
    },
    {
        id: 32,
        name: "Chuột Gaming Logitech G Pro X Superlight 2 Wireless",
        price: 3190000,
        oldPrice: 3490000,
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
        shortDescription: "Chuột Esport siêu nhẹ, cảm biến HERO 2 độ chính xác tuyệt đối.",
        longDescription: "Chuột không dây chuyên game Esport siêu nhẹ chỉ 60g.",
        category: "components", // Khớp với HTML
        stock: 11,
        hot: false,
        newProduct: true,
        sale: true
    }
];


let cart = JSON.parse(localStorage.getItem("cart")) || [];

const formatPrice = (price) => {
    return (price || 0).toLocaleString("vi-VN") + " đ";
}

const updateCartCount = () => {
  const totalQty = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
  const countElements = document.querySelectorAll(".cart-count");
  countElements.forEach((el) => {
    el.textContent = totalQty;
  });
};

const renderCart = () => {
  const container = document.getElementById("cart-content-wrapper");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <h3>Giỏ hàng của bạn đang trống!</h3>
        <p style="margin: 15px 0; color: #666;">Hãy chọn thêm sản phẩm để tiếp tục mua sắm nhé.</p>
        <a href="products.html" class="btn btn-primary" style="text-decoration: none; padding: 10px 20px; display: inline-block;">Xem sản phẩm ngay</a>
      </div>
    `;
    return;
  }

  let totalPrice = 0;

  let itemsHTML = cart.map((item) => {
    let product = products.find((p) => p.id === item.id) || {};
    
    let name = product.name || item.name || "Sản phẩm";
    let price = product.price || item.price || 0;
    let image = product.image || item.image || "";
    
    let subtotal = price * item.qty;
    totalPrice += subtotal;

    return `
      <div class="cart-item">
          <img src="${image}" alt="${name}" />
          <div class="cart-item-info">
              <div class="cart-item-title">${name}</div>
              <div class="cart-item-price">${formatPrice(price)}</div>
          </div>
          <div class="cart-item-actions">
              <button type="button" onclick="changeQty(${item.id}, -1)">-</button>
              <span>${item.qty}</span>
              <button type="button" onclick="changeQty(${item.id}, 1)">+</button>
              <button type="button" onclick="removeItem(${item.id})" style="background: #ff4d4f; color: #fff; margin-left: 10px; border: none; padding: 6px 10px; border-radius: 4px; cursor: pointer;"><i class="fa-solid fa-trash"></i></button>
          </div>
      </div>
    `;
  }).join("");

  container.innerHTML = `
    <div class="cart-items-list">
        <h3>Danh sách sản phẩm</h3>
        ${itemsHTML}
    </div>
    <div class="cart-summary">
        <h3>Cộng giỏ hàng</h3>
        <div class="summary-row">
            <span>Tạm tính:</span>
            <span style="font-weight: bold;">${formatPrice(totalPrice)}</span>
        </div>
        <div class="summary-row">
            <span>Phí vận chuyển:</span>
            <span>Miễn phí</span>
        </div>
        <div class="summary-row summary-total">
            <span>Tổng cộng:</span>
            <span>${formatPrice(totalPrice)}</span>
        </div>
        <a href="checkout.html" class="btn-checkout">Tiến hành thanh toán</a>
    </div>
  `;
};

function addToCart(productId) {
  let product = products.find((p) => p.id === productId);
  if (!product) return;

  let item = cart.find((i) => i.id === productId);
  if (item) {
    item.qty++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  if (typeof updateCartCount === "function") {
        updateCartCount();
    }
  alert("Đã thêm sản phẩm vào giỏ hàng thành công!");
}

function changeQty(id, delta) {
  let item = cart.find((i) => i.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter((i) => i.id !== id);
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

function removeItem(id) {
  cart = cart.filter((i) => i.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

updateCartCount();
renderCart();