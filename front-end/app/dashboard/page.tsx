"use client";
import { useState, useMemo } from "react";
import GoogleMap from "../components/Map";

export default function DashboardPage() {
  let lat = 13.5819774;
  let lng = 100.5512421;
  // console.log(localStorage.getItem("email"));
  // console.log(localStorage.getItem("password"));
  const [selectedKeys, setSelectedKeys] = useState(new Set(["hybrid"]));
  const [zoom, setZoom] = useState(6);

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <>
      <div className="relative w-full h-full user-select-none">
        <GoogleMap />
      </div>
    </>
  );
}
