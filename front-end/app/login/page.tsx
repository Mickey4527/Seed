"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Input, Checkbox, cn } from "@nextui-org/react";
import SubmitButton from "@/components/button/submit";

import EmailValidate from "../auth/validate/email-validate";
import Login from "../auth/api/login";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailValidation = (email: string) => {
    if (!EmailValidate(email, setEmailError)) return false;
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
    e.preventDefault();
    if (!emailValidation(email)) return;
    if (!passwordValidation(password)) return;

    setLoading(true);
    await Login(email, password, remember)
      .then(() => {
        console.log("เข้าสู่ระบบสำเร็จ");
        router.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setPasswordError("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
        setLoading(false);
      });
  };

  const submitButton = SubmitButton(
    "เข้าสู่ระบบ",
    handleSubmit,
    loading,
    "กำลังเข้าสู่ระบบ...",
    "w-1/2"
  );

  return (
    <>
      <h1 className="text-3xl font-bold mb-10 color-forest-green-950">ลงชื่อเข้าใช้</h1>
      <form className="flex flex-col gap-4">
        <Input
          className="mb-1"
          label="อีเมล"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => emailValidation(email)}
          isInvalid={emailError !== "" ? true : false}
          errorMessage={emailError}
        />
        <Input
          className="mb-5"
          label="รหัสผ่าน"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => passwordValidation(password)}
          isInvalid={passwordError !== "" ? true : false}
          errorMessage={passwordError}
        />
        <div className="flex justify-between items-center">
          <Link href="login/forgotPassword" className="text-forest-green-700">
            ลืมรหัสผ่าน
          </Link>
        </div>
        <div className="flex justify-end items-center">{submitButton}</div>
      </form>
    </>
  );
}
