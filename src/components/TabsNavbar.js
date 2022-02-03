import React, { useEffect } from "react";
import TabNavItem from "./TabNavItem";
import { useLocation } from 'wouter';
import { useStore } from "react-redux";

function TabsNavbar() {

  const [currentPath, ] = useLocation('/home');

  const store = useStore();
  const tabs = store.getState().tabs;

  useEffect(() => {
    // Updating who tab is selected every time the path changes
    Array.from(document.querySelector('.side-bar__nav-list').children).forEach((item) => {
      item.classList.remove('selected');
      if (item.classList.contains(currentPath)) item.classList.add('selected')
    });
  }, [currentPath]); // eslint-disable-line

  return (
    <ul className='side-bar__nav-list'>
      {
        tabs.map(tab => {
          return <TabNavItem 
            path={tab.path}
            icon={tab.icon}
            title={tab.title}
            subtabs={tab.subtabs}
          />
        })
      }
    </ul>
  );
}
export default TabsNavbar;