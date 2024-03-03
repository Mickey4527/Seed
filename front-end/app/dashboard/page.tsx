"use client";
import { useRouter } from "next/router";

console.log(localStorage.getItem("email"));
console.log(localStorage.getItem("password"));

export default function dashboard() {
    return (
        <div>
            <h1>แดรชบอร์ด</h1>
        </div>
    )
}