"use client";
import { useState, FormEvent } from "react";

import { Input, Checkbox, Button } from "@nextui-org/react";
//import { login } from 'app/auth/api'

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailValidation = (email: string) => {
    if (email === "") {
      setEmailError("กรุณากรอกอีเมล");
      return false;
    }
    setEmailError("");
    return true;
  };

  const passwordValidation = (password: string) => {
    if (password === "") {
      setPasswordError("กรุณากรอกรหัสผ่าน");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    if (!emailValidation(email)) return e.preventDefault();
    if (!passwordValidation(password)) return e.preventDefault();

    setLoading(true);
    // await login(email, password)
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-10">ลงชื่อเข้าใช้</h1>
      <form className="flex flex-col gap-4">
        <Input
          className="mb-1"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => emailValidation(email)}
          isInvalid={emailError !== "" ? true : false}
          errorMessage={emailError}
        />
        <Input
          className="mb-5"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => passwordValidation(password)}
          isInvalid={passwordError !== "" ? true : false}
          errorMessage={passwordError}
        />
        <div className="flex justify-between items-center">
          <Checkbox checked={true} onChange={() => {}}>
            <p className="text-zinc-500">จดจำฉัน</p>
          </Checkbox>
          <a href="login/forgotPassword" className="text-blue-600">
            ลืมรหัสผ่าน
          </a>
        </div>
        <Button
          color="primary"
          type="submit"
          onClick={handleSubmit}
          isLoading={loading}
        >
          ลงชื่อเข้าใช้
        </Button>
      </form>
    </>
  );
}
