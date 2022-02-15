import { useStore } from "react-redux";
import TabHeader from "./TabHeader";
import SubtabsListview from "./SubtabsListview";
import { getCurrentTabPath, userIsOnTab } from '../../utilities/funcs';
import './styles/Tab.scss'
import TabContent from "./TabContent";
import { motion } from "framer-motion";

function Tab() {

  const store = useStore();
  const tabs = store.getState().tabs;

  for (let tab of tabs) {

    if (tab.path === getCurrentTabPath()) {
      return (
        < >
          <TabHeader tab={tab}/>
          <motion.div
            className='tab__content'
            initial={{opacity: 0, y: 5}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.2, delay: 0.3}}
          >
            {
              (userIsOnTab() && tab.type === 'DASHBOARD_VIEWER')?
              <SubtabsListview tab={tab}/>
              : null
            }
            <TabContent tab={tab}/>
          </motion.div>
        </>
      );
    }
  }
  return <div>FATAL ERROR IN TAB.JS</div>;
}
export default Tab;