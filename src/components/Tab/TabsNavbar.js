import React, { useEffect, useState } from "react";
import { useLocation } from 'wouter';
import { useStore } from "react-redux";
import TabNavItem from "./TabNavItem";
import Modal from '../Modal'

function TabsNavbar() {

  const [currentPath, ] = useLocation('/home');
  const [displayed, setDisplayed] = useState(false)

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
      <Modal displayed={displayed} setDisplayed={setDisplayed}/>
      <ul className='app-sidebar__nav-list'>
      {
        tabs.map(tab => {
          return <TabNavItem
            icon={tab.icon}
            title={tab.title}
            path={tab.path}
            key={tab.path}/>
        })
      }
      </ul>
      <button onClick={() => setDisplayed(true)}>+ Add tab</button>
    </>
  );
}
export default TabsNavbar;