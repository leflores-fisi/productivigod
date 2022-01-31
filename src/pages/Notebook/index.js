import ListView from '../../components/ListView';
import {NotebookContext} from './context/NotebookContext'

function Notes() {

  return (
    <NotebookContext.Provider value={8}>
      <header>
        Notes... why note?
      </header>
      <br/>
      <ListView/>
    </NotebookContext.Provider>
  );
}

export default Notes;