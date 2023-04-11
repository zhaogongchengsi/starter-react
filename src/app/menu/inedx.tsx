import { Menu } from "@arco-design/web-react";
import { IconApps } from "@arco-design/web-react/icon";
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const App = () => {
  return (
    <div>
      <Menu defaultOpenKeys={["0"]} defaultSelectedKeys={["0_1"]}>
        <SubMenu
          key="0"
          title={
            <>
              <IconApps /> Navigation 1
            </>
          }
        >
          <MenuItem key="0_0">Menu 1</MenuItem>
          <MenuItem key="0_1">Menu 2</MenuItem>
          <MenuItem key="0_2" disabled>
            Menu 3
          </MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default App;
