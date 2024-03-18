"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import MenuUser from "./list-menu/menu-user";
import {
  Layers,
  Settings,
  ArrowBackIos,
  Menu,
  AccountCircle,
} from "@mui/icons-material";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-shark-950 z-[99] flex-none h-screen hidden md:block transition-all duration-300 ease-in-out overflow-hidden"
      style={{ width: `${open ? 250 : 72}px` }}
    >
      <nav className={`flex flex-col gap-2 h-full p-${open ? 4 : 1}`}>
        <div
          className={`flex justify-${
            open ? "between" : "center"
          } items-center h-20`}
        >
          <div className={`${open ? "black" : "hidden"}`}>
            <Image
              src={process.env.NEXT_PUBLIC_APP_LOGO!}
              alt="การยางแห่งประเทศไทย"
              width={150}
              height={150}
              priority={true}
              className="my-5"
            />
          </div>
          <div>
            <a href="#" onClick={() => setOpen(!open)}>
              {open ? (
                <ArrowBackIos className="text-gray-200" />
              ) : (
                <Menu className="text-gray-200" />
              )}
            </a>
          </div>
        </div>
        <ul
          className={`${
            open
              ? "h-full grid gap-4 content-between"
              : "h-screen flex flex-col justify-between"
          }`}
        >
          <li>
            <ul>
              <li>
                <Link href="/dashboard">
                  <div
                    className={`${
                      open
                        ? "grid grid-flow-row-dense grid-cols-4 items-center"
                        : "flex flex-col items-center"
                    } text-sm py-2.5 px-4 rounded-lg text-gray-200 hover:bg-forest-green-700/50 hover:text-white`}
                  >
                    <div>
                      <Layers />
                    </div>
                    <span className="col-span-3">แผนที่</span>
                  </div>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <MenuUser open={open} />
                <Link
                  href="/settings"
                  className={`${
                    open
                      ? "grid grid-flow-row-dense grid-cols-4 items-center"
                      : "flex flex-col items-center"
                  } text-sm py-2.5 px-4 rounded-lg text-gray-200 hover:bg-forest-green-700/50 hover:text-white`}
                >
                  <Settings />
                  ตั้งค่า
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;

/* <div className="flex justify-between items-center px-4 py-2.5 bg-gray-700 rounded-lg">
<div className="text-gray-200">Dashboard</div>
<svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-200"
    viewBox="0 0 20 20"
    fill="currentColor"
>
    <path
    fillRule="evenodd"
    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    clipRule="evenodd"
    />
</svg>

  <a
                href="#"
                className="block py-2.5 px-4 rounded-lg text-gray-200 hover:bg-gray-700 hover:text-white"
            >
                Settings
            </a>

</div> */
