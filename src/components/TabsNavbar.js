import React, { useEffect } from "react";
import { useLocation } from 'wouter';
import { useStore } from "react-redux";
import TabNavItem from "./TabNavItem";

function TabsNavbar() {

  const [currentPath, ] = useLocation('/home');

  const store = useStore();
  const tabs = store.getState().tabs;

  useEffect(() => {
    // Updating who tab is selected every time the path changes
    Array.from(document.querySelector('.app-sidebar__nav-list').children).forEach((item) => {
      item.classList.remove('selected');
      if (item.classList.contains(currentPath)) item.classList.add('selected')
    });
  }, [currentPath]); // eslint-disable-line

  return (
    < >
      <ul className='app-sidebar__nav-list'>
      {
        tabs.map(tab => {
          return <TabNavItem
            key={tab.path}
            path={tab.path}
            icon={tab.icon}
            title={tab.title}
            subtabs={tab.subtabs}/>
        })
      }
      </ul>
      <button>+ Add tab</button>
    </>
  );
}
export default TabsNavbar;