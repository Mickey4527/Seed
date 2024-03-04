import Image from "next/image";

function Sidebar() {
  return (
    <div className="bg-gray-900 h-screen w-64 hidden sm:block">
      <nav className="flex flex-col gap-2 h-full p-3">
        <div className="flex justify-center items-center h-20">
          <Image
            src="/RMUTT.png"
            alt="RMUTT"
            width={150}
            height={150}
            priority={true}
            className="my-5"
          />
        </div>
        <ul className="h-full grid gap-4 content-between">
          <li>
            <ul>
              <li className="text-gray-200">Dashboard</li>
              <li>
                <a
                  href="#"
                  className="block py-2.5 px-4 rounded-lg text-gray-200 hover:bg-gray-700 hover:text-white"
                >
                  Settings
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
