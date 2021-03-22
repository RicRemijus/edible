import React from 'react';
import  {SideBarcontainer, Icon, CloseIcon, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRout}
 from './SideBarElem';
const Sidebar = ({isOpen, toggle})=>  {
    return (
        <SideBarcontainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
              <CloseIcon/>
            </Icon>
            <SideBarMenu>
                <SideBarLink to="/meat"> Pepper Meat</SideBarLink>
                <SideBarLink to="/friedrice">Fried Rice</SideBarLink>
                <SideBarLink to="/soups">Soup</SideBarLink>
                <SideBarLink to="/full menu">Full Menu</SideBarLink>
            </SideBarMenu>
            <SideBtnWrap>
              <SideBarRout to="/">Order Now</SideBarRout>  
            </SideBtnWrap>
        </SideBarcontainer>
    )
}

export default Sidebar;
