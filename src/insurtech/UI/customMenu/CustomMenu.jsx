// import { MenuOutlined } from "@ant-design/icons";
import { Menu, ConfigProvider } from "antd";
import React from "react";

const CustomMenu = ({
  items,
  onClick,
  className,
  defaultSelectedKeys,
  theme = "dark",
  mode,
  style,
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ffffff",
        },
      }}
    >
      <Menu
        onClick={onClick}
        theme={theme}
        mode={mode}
        defaultSelectedKeys={[defaultSelectedKeys]}
        items={items}
        className={className}
        style={style}
        // overflowedIndicator={
        //   <MenuOutlined
        //     style={{ fontSize: "26px", color: "#08A262", padding: "5px 2px" }}
        //   />
        // }
      />
    </ConfigProvider>
  );
};

export default CustomMenu;
