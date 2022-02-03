import { useStore } from "react-redux";
import TabHeader from "./TabHeader";
import SubtabsListview from "./SubtabsListview";

function Tab({params}) {

  const store = useStore();
  const tabs = store.getState().tabs;

  for (let tab of tabs) {
    if (tab.path === `/${params.tab}`) {
      return (
        <>
          <TabHeader tab={tab}/>
          <SubtabsListview tab={tab}/>
          <div>En la tab: {params.tab}</div>
        </>
      );
    }
  }
  return <div>FATAL ERROR IN TAB.JS</div>;
}
export default Tab;