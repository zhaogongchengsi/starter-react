import Sider from "./Sider";
import { LayoutProps } from "./props";
import { Layout, Button } from "@arco-design/web-react";

export default function ({ children, aside }: LayoutProps) {
  return (
    <Layout className="w-full h-screen">
      <Sider> {aside} </Sider>
      <Layout>
        {/* todo: 顶部 */}
        <Layout.Header>
          <Button shape="round" className="trigger">
            搜索侧边栏
          </Button>
        </Layout.Header>
        <Layout style={{ padding: "0 24px" }}>123</Layout>
      </Layout>
    </Layout>
  );
}
