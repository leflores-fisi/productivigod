import React, { useEffect } from "react";
import TabNavItem from "./TabNavItem";
import { useLocation } from 'wouter';
import { useAppSession } from "../context/AppSessionContext";

function TabsNavbar() {

  const [currentPath, ] = useLocation('/home');
  const navTabs = useAppSession().tabs;

  // Updating who tab is selected every time the path changes
  useEffect(() => {
    Array.from(document.querySelector('.side-bar__nav-list').children).forEach((item) => {
      item.classList.remove('selected');
      if (item.classList.contains(currentPath)) item.classList.add('selected')
    });
  }, [currentPath]);

  return (
    <ul className='side-bar__nav-list'>
      {
        navTabs.map(tab => {
          return <TabNavItem 
            path={tab.path}
            icon={tab.icon}
            name={tab.title}
            subtabs={tab.subtabs}
          />
        })
      }
    </ul>
  );
}
export default TabsNavbar;