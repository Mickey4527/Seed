import { useState, useMemo } from "react";
import { Layers, Map } from "@mui/icons-material";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Button,
  Switch,
} from "@nextui-org/react";

export default function MapConfigComponent() {
  const [selectedKeys, setSelectedKeys] = useState(new Set([""]));


  const handleSelectionChange = (keys: any) => {
    // Ensure keys is a Set and update state accordingly
    setSelectedKeys(new Set(keys));
    console.log(keys);
  };

  return (
    <div className="absolute top-0 right-0 m-4 z-10 flex gap-4">
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="bordered"
            isIconOnly
            aria-label="Map type selector"
            className="capitalize bg-white p-4 rounded-lg shadow-lg text-shark-600"
            id="maptype"
          >
            <Map />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Multiple selection example"
          variant="flat"
          closeOnSelect={false}
          disallowEmptySelection
          selectionMode="none"
          selectedKeys={selectedKeys}
          onSelectionChange={handleSelectionChange}
        >
          <DropdownSection title="ขอบเขตพื้นที่">
            <DropdownItem key="provinceDisplay">ขอบเขตจังหวัด</DropdownItem>
            <DropdownItem key="">ขอบเขตการปกครอง</DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>

      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="bordered"
            isIconOnly
            aria-label="Map type selector"
            className="capitalize bg-white p-4 rounded-lg shadow-lg text-shark-600"
            id="maptype"
          >
            <Layers />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Multiple selection example"
          variant="flat"
          closeOnSelect={false}
          disallowEmptySelection
          selectionMode="none"
          selectedKeys={selectedKeys}
          onSelectionChange={handleSelectionChange}
        >
          <DropdownSection title="แสดงข้อมูล" >
            <DropdownItem key="hybrid">แผนที่ผสม</DropdownItem>
            <DropdownItem key="satellite">ภาพดาวเทียม</DropdownItem>
            <DropdownItem key="terrain">ภูมิประเทศ</DropdownItem>
            <DropdownItem key="roadmap">แผนที่ถนน</DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}