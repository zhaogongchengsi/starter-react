import React from "react";
import {Button} from "@arco-design/web-react";
import {useTheme} from "@/store";

const Header :React.FC = () => {
    const [_ ,setMode] = useTheme()
    const setThemeDark = () => {
        setMode()
    }

    return (
        <div className="w-full flex p-4 justify-between">
            <div> <Button shape="round" className="trigger" onClick={setThemeDark}>
                切换侧边栏
            </Button> </div>
            <div>
                right
            </div>
        </div>
    )
}

 export  default Header