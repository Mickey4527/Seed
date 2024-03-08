"use client";
import { useState } from "react";
import Image from "next/image";
import { Layers, Settings, ArrowBackIos } from "@mui/icons-material";

function Sidebar() {
  const [width, setWidth] = useState(250);
  const [dispay, setDispay] = useState("block");

  const handleResize = () => {
    if (width === 250) {
      setWidth(60);
      setDispay("hidden");
    } else {
      setWidth(250);
      setDispay("block");
    }
  };

  return (
    <div
      className="bg-shark-950 flex-none h-screen hidden md:block"
      style={{ width: `${width}px` }}
    >
      <nav className="flex flex-col gap-2 h-full p-3">
        <div className="flex justify-between items-center h-20">
          <div className={`${dispay}`}>
            <Image
              src="/RMUTT.png"
              alt="RMUTT"
              width={150}
              height={150}
              priority={true}
              className="my-5"
            />
          </div>
          <div>
            <a href="#" onClick={handleResize}>
              <ArrowBackIos className="text-gray-200" />
            </a>
          </div>
        </div>
        <ul className="h-full grid gap-4 content-between">
          <li>
            <ul>
              <li>
                <a
                  href="/dashboard"
                  className="block py-2.5 px-4 rounded-lg text-gray-200 hover:bg-forest-green-700/50 hover:text-white"
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
