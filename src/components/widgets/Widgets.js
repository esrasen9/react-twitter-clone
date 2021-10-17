import React from 'react';
import "../css/Widgets.css";
import SearchTwitter from "./SearchTwitter";
import WidgetPosts from "./WidgetPosts";
const Widgets = () => {
    return (
        <div className="widgets">
            <SearchTwitter />
            <WidgetPosts />
        </div>
    );
}

export default Widgets;