import { Layout } from "@arco-design/web-react";
import { SliderProps } from "./props";

export default function Sider({ children }: SliderProps) {
  return (
    <>
      <Layout.Sider collapsible className="h-screen">
        {children}
      </Layout.Sider>
    </>
  );
}
