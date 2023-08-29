
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
  
    loginForm.addEventListener("submit", async function (event) {
      event.preventDefault();
  
      const email = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      const requestData = {
        email: email,
        password: password,
        remember: true,
        additionalProp1: {},
      };
  
      try {
        const response = await fetch("https://api.vinnovate.vn/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });
  
        if (response.status === 200) {
            const responseData = await response.json();
            const accessToken = responseData.data.accessToken;
            const refreshToken = responseData.data.refreshToken;
          
            // Lưu tokens vào Local Storage hoặc Session Storage
            localStorage.setItem("access_token", accessToken);
            localStorage.setItem("refresh_token", refreshToken);
          
            window.location.replace("home.html");
        } else {
          console.error("Đăng nhập thất bại");
        }
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    });
  });
  