import { useStore } from "react-redux";
import TabHeader from "./TabHeader";
import SubtabsListview from "./SubtabsListview";
import { getCurrentTabPath, userIsOnTab } from '../../utilities/funcs';
import './styles/Tab.scss'
import TabContent from "./TabContent";

function Tab() {

  const store = useStore();
  const tabs = store.getState().tabs;

  for (let tab of tabs) {

    if (tab.path === getCurrentTabPath()) {
      return (
        < >
          <TabHeader tab={tab}/>
          <div className='tab__content'>
            {
              (userIsOnTab() && tab.hasOwnProperty('subtabs'))?
              <SubtabsListview tab={tab}/>
              : null
            }
            <TabContent tab={tab}/>
          </div>
        </>
      );
    }
  }
  return <div>FATAL ERROR IN TAB.JS</div>;
}
export default Tab;