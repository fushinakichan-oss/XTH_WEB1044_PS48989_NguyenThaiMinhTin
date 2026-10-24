document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Ngăn chặn load lại trang mặc định

            const nameInput = document.getElementById("reg-name");
            const emailInput = document.getElementById("reg-email");
            const passwordInput = document.getElementById("reg-password");

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value;

            // 1. Kiểm tra không để trống
            if (!name || !email || !password) {
                alert("Vui lòng điền đầy đủ thông tin!");
                return;
            }

            // 2. Kiểm tra mật khẩu dưới 6 ký tự
            if (password.length < 6) {
                alert("Mật khẩu phải có ít nhất từ 6 ký tự trở lên!");
                passwordInput.focus();
                return;
            }

            // 3. Lấy danh sách tài khoản hiện có từ localStorage
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // 4. Kiểm tra email đã tồn tại hay chưa
            const existingUser = users.find(u => u.email === email);
            if (existingUser) {
                alert("Email này đã được đăng ký tài khoản khác!");
                emailInput.focus();
                return;
            }

            // 5. Thêm tài khoản mới vào danh sách
            users.push({ name, email, password });
            localStorage.setItem("users", JSON.stringify(users));

            // 6. Thông báo thành công và chuyển hướng sang trang đăng nhập
            alert("Đăng ký thành công! Vui lòng đăng nhập lại.");
            window.location.href = "login.html";
        });
    }
});