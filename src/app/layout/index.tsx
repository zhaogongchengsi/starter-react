import Slider from "./Sider";
import { LayoutProps } from "./props";
import { Layout } from "@arco-design/web-react";
import React from "react";

const AppLayout: React.FC<LayoutProps> = ({ children, aside, header }) => {
  return (
    <Layout className="w-full h-screen flex-row!">
      <Slider> {aside} </Slider>
      <Layout>
        <Layout.Header>{header}</Layout.Header>
        <Layout>
          <Layout.Content>{children}</Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
