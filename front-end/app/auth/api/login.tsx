async function Login(
  email: string,
  password: string,
  remember: boolean
): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const res = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });


        if (res.ok) {
          if (remember) {
            localStorage.setItem("email", email);
          }
          resolve();
        } else {
          reject("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
        }
      } catch (e) {
        reject("เกิดข้อผิดพลาด");
      }
    }, 1000);
  });
}

export default Login;
