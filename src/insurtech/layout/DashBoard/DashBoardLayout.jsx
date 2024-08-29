import React, { useState } from "react";
import SiderDasboard from "./components/SiderDasboard";
import HeaderDashboard from "./components/HeaderDashboard";
import useDeviceType from "../../hooks/useDeviceType";
import { Layout } from "antd";
import "./styles.css";
import { Outlet } from "react-router-dom";

const DashBoardLayout = () => {
  const deviceType = useDeviceType();
  const [collapsed, setCollapsed] = useState(
    deviceType === "mobile" ? true : false
  );
  const { Content } = Layout;
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();

  return (
    <Layout className="h-screen">
      <SiderDasboard deviceType={deviceType} collapsed={collapsed} />
      <Layout>
        <HeaderDashboard
          deviceType={deviceType}
          setCollapsed={setCollapsed}
          collapsed={collapsed}
        />
        <Content
          className="bg-gradient-to-b from-[#8de6c241] to-[#4e806c41]"
          style={{
            margin: 0,
            padding: 24,
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashBoardLayout;
