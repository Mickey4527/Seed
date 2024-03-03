"use client";

import forgotPassword from "@/app/auth/api/forgot/forgotPassword";
import { useState, FormEvent } from "react";

import { Input, Button } from "@nextui-org/react";
import  SubmitButton  from '../../components/button/submit';

import EmailValidate from '../../auth/validate/email-validate';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const checkEmail = (email: string) => {
    if (!EmailValidate(email, setError)) return false;
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    if (!checkEmail(email)) return e.preventDefault();
    setLoading(true);
    await forgotPassword(email)
      .then(() => {
        console.log("ส่งอีเมลสำเร็จ");
      })
      .catch((err) => {
        setError(err);
      });
    e.preventDefault();
    setLoading(false)
  };

  const submitButton = SubmitButton("ส่งอีเมล", handleSubmit, loading, "กำลังส่งอีเมล...", "w-1/2");

  return (
    <>
      <h1 className="text-3xl font-bold mb-10">ลืมรหัสผ่าน</h1>
      <form className="flex flex-col gap-4">
        <Input
          className="mb-1"
          label="อีเมล"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => checkEmail(email)}
          isInvalid={error !== "" ? true : false}
          errorMessage={error}
        />
        <div className="flex justify-end items-center">
          {submitButton}
        </div>
      </form>
    </>
  );
}

