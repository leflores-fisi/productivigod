import SubtabsListview from '../../components/SubtabsListview';
import TabHeader from '../../components/TabHeader';
import { useAppSession } from '../../context/AppSessionContext';
import MarkDownEditor from './components/MarkdownEditor';

function Notes() {

  const tab = useAppSession().tabs[1];

  return (
    <div>
      <TabHeader tab={tab}/>
      <SubtabsListview session={tab} Component={MarkDownEditor}/>
    </div> // Maybe deleted this div?
  );
}

export default Notes;