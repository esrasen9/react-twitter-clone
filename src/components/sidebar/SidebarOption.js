import React from 'react';

const SidebarOption = ({ Icon, desc, isActive}) => {
    return (
        <div className={isActive ? "sidebar-option active" : "sidebar-option"}>
            <Icon className="sidebar-icon" />
            <h3>{desc}</h3>
        </div>
    );
}

export default SidebarOption;