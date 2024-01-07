import Link from "next/link";
import { Input, Space, Dropdown } from "antd";
const { Search } = Input;
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
function Header() {
  const items: MenuProps["items"] = [
    {
      label: "My account",
      key: "1",
    },
    {
      label: "Singin",
      key: "2",
    },
  ];
  return (
    <header className="bg-orange-50 flex flex-row justify-center">
      <div className="flex container">
        <div className="basis-1/2 m-10">
          <Link href={"/"}>Logo</Link>
        </div>
        <Search
          className="basis-1/2 m-10"
          placeholder="input search text"
          allowClear
          style={{ width: 304 }}
        />
        <div className="basis-1/2 m-10 flex">
          <div className="basis-1/2">
            <Link href={"/collection"}>Collection</Link>
          </div>
          <div className="basis-1/2">
            <Link href={"/blog"}>Blog</Link>
          </div>
          <div className="basis-1/2">
            <Link href={"/about"}>About</Link>
          </div>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                User
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}

export default Header;
