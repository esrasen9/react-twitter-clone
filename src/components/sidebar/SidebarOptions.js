import React from "react";
import icons from "./icons";
import SidebarOption from "./SidebarOption";

const SidebarOptions = () => {
    return icons.map(icon => <SidebarOption
                                    isActive={icon.isActive}
                                    Icon={icon.icon}
                                    desc={icon.desc}/>);
}

export default SidebarOptions;

