import { Layout } from "@douyinfe/semi-ui";

export default function Home() {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <Layout className="w-full h-screen dark:bg-dark bg-light">
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}
