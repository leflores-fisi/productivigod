import ListView from '../../components/ListView';
import { useAppSession } from '../../context/AppSessionContext';
import MarkDownEditor from './components/MarkdownEditor';

function Notes() {

  const session = useAppSession().tabs[1];

  return (
    <div>
      <header>
        Notes... why note?
      </header>
      <br/>
      <ListView session={session} Component={MarkDownEditor}/>
    </div>
  );
}

export default Notes;