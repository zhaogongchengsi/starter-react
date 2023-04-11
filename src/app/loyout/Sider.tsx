import { Layout } from "@arco-design/web-react";
import { SiderProps } from "./props";

export default function Sider({ children }: SiderProps) {
  return (
    <>
      <Layout.Sider collapsible className="h-screen">
        {children}
      </Layout.Sider>
    </>
  );
}
