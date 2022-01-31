import SubtabsListview from "../../components/SubtabsListview";
import TabHeader from "../../components/TabHeader";
import { useAppSession } from "../../context/AppSessionContext";
import Assignments from "./components/Assignments";

function Tasks() {

  const tab = useAppSession().tabs[0];

  return (
    <div>
      <TabHeader tab={tab}/>
      <SubtabsListview session={tab} Component={Assignments}/>
    </div>
  )
}

export default Tasks;