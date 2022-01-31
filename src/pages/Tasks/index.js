import { TasksProvider } from "../../context/TasksContext";
import Assignments from "./components/Assignments";

function Tasks() {

  const initialState = {
    stories: [
      
    ]
  }

  return (
    <>
      <TasksProvider>
        <header>Lets make a productive day</header>
        <Assignments>
        </Assignments>
      </TasksProvider>
    </>

  )
}

export default Tasks;