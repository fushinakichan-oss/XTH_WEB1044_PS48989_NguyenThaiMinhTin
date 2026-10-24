document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const emailInput = document.getElementById("login-email");
            const passwordInput = document.getElementById("login-password");

            const email = emailInput.value.trim();
            const password = passwordInput.value;

            if (!email || !password) {
                alert("Vui lòng điền đầy đủ thông tin đăng nhập!");
                return;
            }

            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Tìm kiếm user khớp email và mật khẩu
            const validUser = users.find(u => u.email === email && u.password === password);

            if (validUser) {
                localStorage.setItem("currentUser", JSON.stringify(validUser));
                alert(`Đăng nhập thành công! Chào mừng bạn, ${validUser.name}`);
                window.location.href = "index.html";
            } else {
                alert("Email hoặc mật khẩu không chính xác!");
            }
        });
    }
});