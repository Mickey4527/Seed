async function Login(email: string, password: string, remember: boolean) : Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "completed@mail.com" && password === "123456") {
        if (remember) {
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
        }
        resolve();
      } else {
        reject("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
      }
      reject("เกิดข้อผิดพลาด");
    }, 1000);
  });
}

export default Login;
