import { Layout, Nav, Button } from "@douyinfe/semi-ui";
import { IconArrowLeft, IconAperture } from "@tabler/icons-react";

export default function Home() {
  const { Header, Footer, Sider, Content } = Layout;

  const handleToggle = () => {
    const body = document.body;
    if (body.hasAttribute("theme-mode")) {
      body.classList.remove("dark");
      body.removeAttribute("theme-mode");
    } else {
      body.classList.add("dark");
      body.setAttribute("theme-mode", "dark");
    }
  };

  return (
    <Layout className="w-full h-screen dark:bg-dark bg-light">
      <Header className="h-15">Header</Header>
      <Layout>
        <Sider>
          <Nav
            className="h-full"
            items={[
              { itemKey: "user", text: "用户管理", icon: <IconArrowLeft /> },
              { itemKey: "union", text: "活动管理", icon: <IconAperture /> },
              {
                text: "任务平台",
                itemKey: "job",
                items: ["任务管理", "用户任务查询"],
              },
            ]}
          />
        </Sider>
        <Content>
          <Button onClick={handleToggle}>切换模式</Button>
        </Content>
      </Layout>
      <Footer className="h-10 flex items-center justify-center">Footer</Footer>
    </Layout>
  );
}
