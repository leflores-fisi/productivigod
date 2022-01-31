import ListView from "../../components/ListView";
import { useAppSession } from "../../context/AppSessionContext";
import Assignments from "./components/Assignments";

function Tasks() {

  const session = useAppSession().tabs[0];

  return (
    <div>
      <header>
        Lets make a productive day
      </header>
      <ListView session={session} Component={Assignments}/>
    </div>
  )
}

export default Tasks;