
import React from 'react';



const Sidebar = (props) => {
 
    const {title} = props

    console.log("side - ", title);
    return (
       <li>
      {title}
       </li>
    );
};

export default Sidebar;