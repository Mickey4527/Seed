"use client";
import { useState } from "react";
import Image from "next/image";
import { Layers, Settings, ArrowBackIos } from "@mui/icons-material";

function Sidebar() {

  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-shark-950 flex-none h-screen hidden md:block"
      style={{ width: `${open? 250 : 72}px` }}
    >
      <nav className={`flex flex-col gap-2 h-full p-${open ? 3 : 1}`}>
        <div className={`flex justify-${ open ? 'between': 'center'} items-center h-20`}>
          <div className={`${open ? 'black' : 'hidden'}`}>
            <Image
              src="/Logo.png"
              alt="โลโก้การยางแห่งประเทสไทย"
              width={150}
              height={150}
              priority={true}
              className="my-5"
            />
          </div>
          <div>
            <a href="#" onClick={() => setOpen(!open)}>
              <ArrowBackIos className="text-gray-200" />
            </a>
          </div>
        </div>
        <ul className={`${open ? 'h-full grid gap-4 content-between' : 'h-screen flex flex-col justify-between'}`}>
          <li>
            <ul>
              <li>
                <a
                  href="/dashboard"
                  className={`${open ? 'block' : 'flex flex-col items-center'} text-base py-2.5 px-4 rounded-lg text-gray-200 hover:bg-forest-green-700/50 hover:text-white`}
                >
                  <Layers className="mr-2" />
                  แผนที่
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <a
                  href="/dashboard/settings"
                  className="block py-2.5 px-4 rounded-lg text-gray-200 hover:bg-gray-700 hover:text-white"
                >
                  <Settings className="mr-2" />
                  Settings
                </a>
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
