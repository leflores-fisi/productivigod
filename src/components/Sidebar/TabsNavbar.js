import React, { useEffect, useState } from "react";
import { useLocation } from 'wouter';
import { useStore } from "react-redux";
import TabNavItem from "./TabNavItem";
import Modal from '../Overlay/Modal'
import { getCurrentTabPath } from "../../utilities/funcs";

function TabsNavbar() {

  const [displayed, setDisplayed] = useState(false)
  const [tab_path, ] = useLocation()

  const store = useStore();
  const tabs = store.getState().tabs;

  useEffect(() => {
    // Updating who tab is selected every time the path changes
    Array.from(document.querySelector('.app-sidebar__nav-list').children).forEach((item) => {
      item.classList.remove('selected');
      if (item.classList.contains(getCurrentTabPath())) item.classList.add('selected')
    });
  }, [tab_path]);

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
      <button className='add-tab-btn neutral' onClick={() => setDisplayed(true)}>+ Add tab</button>
    </>
  );
}
export default TabsNavbar;