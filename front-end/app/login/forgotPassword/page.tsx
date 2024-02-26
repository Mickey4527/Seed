"use client";

//import { forgotPassword } from 'app/auth/api'
import { useState, FormEvent } from "react";

import { Input, Button } from "@nextui-org/react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const checkEmail = (email: string) => {
    if (email === "") {
      setError("จำเป็นต้องกรอกอีเมล");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    if (!checkEmail(email)) return e.preventDefault();
    setLoading(true);
    //await forgotPassword(email)
    e.preventDefault();
    setLoading(false)
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-10">ลืมรหัสผ่าน</h1>
      <form className="flex flex-col gap-4">
        <Input
          className="mb-1"
          label="อีเมล์"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => checkEmail(email)}
          isInvalid={error !== "" ? true : false}
          errorMessage={error}
        />
        <div className="flex justify-end items-center">
          <Button
            color="primary"
            type="submit"
            onClick={handleSubmit}
            isLoading={loading}
          >
            {loading
              ? "กำลังส่งลิงค์เปลี่ยนรหัสผ่าน..."
              : "ส่งลิงค์เปลี่ยนรหัสผ่าน"}
          </Button>
        </div>
      </form>
    </>
  );
}
