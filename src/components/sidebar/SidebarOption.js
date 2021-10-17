import React from 'react';

const SidebarOption = ({ Icon, desc, isActive}) => {
    return (
        <div className={isActive ? "sidebar-option active" : "sidebar-option"}>
            <Icon className="sidebar-icon" />
            <h2>{desc}</h2>
        </div>
    );
}

export default SidebarOption;