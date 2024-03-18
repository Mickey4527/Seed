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
        } else if (res.status === 401) {
          reject("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
        } else {
          reject("เกิดข้อผิดพลาด (HTTP ".concat(res.status.toString(), ")"));
        }
      } catch (e: any) {
        reject("เกิดข้อผิดพลาด ".concat(e));
      }
    }, 1000);
  });
}

export default Login;
