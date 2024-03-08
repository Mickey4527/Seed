"use client";
import { useState, useMemo } from "react";
import GoogleMap from "../components/Map";

import { Layers, Map } from "@mui/icons-material";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Button,
} from "@nextui-org/react";

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
        <div className="absolute top-0 right-0 m-4 z-10 flex gap-4">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                isIconOnly
                aria-label="Map type selector"
                className="capitalize bg-white p-4 rounded-lg shadow-lg text-shark-600"
              >
                <Map />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Multiple selection example"
              variant="flat"
              closeOnSelect={false}
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              <DropdownSection title="ประเภทแผนที่" showDivider>
                <DropdownItem key="roadmap">แผนที่ถนน</DropdownItem>
                <DropdownItem key="hybrid">แผนที่ดาวเทียม</DropdownItem>
                <DropdownItem key="terrain">แผนที่ภูมิประเทศ</DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger>
              <Button
                className="bg-white p-4 rounded-lg shadow-lg text-shark-600"
                isIconOnly
                aria-label="Zoom in"
                variant="bordered"
              >
                <Layers />
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem>Zoom in</DropdownItem>
              <DropdownItem>Zoom out</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

        <GoogleMap lat={lat} lng={lng} type={selectedValue} zoom={zoom} />
      </div>
    </>
  );
}
