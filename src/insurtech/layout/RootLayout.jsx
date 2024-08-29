import React from "react";
import { Layout } from "antd";

const { Content, Sider, Header } = Layout;

const CustomLayout = ({
  sider,
  header,
  children,
  classNameContent,
  className,
  heightDefault,
  heightDefaultWithoutCal,
  collapsed,
}) => {
  return (
    <Layout
      className={`${heightDefault && "min-h-[calc(100vh-6vh)]"} ${
        heightDefaultWithoutCal && "min-h-screen"
      } ${className}`}
    >
      {sider && (
        <Sider trigger={null} collapsible collapsed={collapsed} width={200}>
          {sider}
        </Sider>
      )}
      <Layout>
        {header && <Header>{header}</Header>}
        <Content className={`${classNameContent}`}>
          <div style={{ minHeight: 360 }}>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
