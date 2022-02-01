import SubtabsListview from "../../components/SubtabsListview";
import TabHeader from "../../components/TabHeader";
import { useAppSession } from "../../context/AppSessionContext";
import Assignments from "./components/Assignments";

function Tasks() {

  const {appSession} = useAppSession();

  return (
    <div>
      <TabHeader tab={appSession.tabs[0]}/>
      <SubtabsListview session={appSession.tabs[0]} Component={Assignments}/>
    </div>
  )
}

export default Tasks;