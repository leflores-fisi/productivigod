import { useAppSession } from "../../../context/AppSessionContext";

function TaskTextInput({todos}) {

  const {appSession, setAppSession} = useAppSession();

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Submiting')
    
    setAppSession((prev) => {
      const atab = {...prev};
      atab.tabs[0].subtabs[0].content.groups[0].todos = [{text: e.target.firstChild.value, status: 'Test'}, ...atab.tabs[0].subtabs[0].content.groups[0].todos];
      
      return atab;
    })
    console.log(appSession.tabs[0].subtabs[0].content.groups[0].todos)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text'></input>
      </form>
      <div>Agregar tarea</div>
    </div>
  );
}

export default TaskTextInput;