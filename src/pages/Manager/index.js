import { useLocation } from 'wouter';
import TabHeader from '../../components/TabHeader';
import { useAppSession } from '../../context/AppSessionContext';

function Manager() {
  
  const {appSession} = useAppSession();
  const tab = appSession.tabs[2];
  const [path, ] = useLocation(); //eslint-disable-line

  return (
    <div>
      <TabHeader tab={tab}/>
    </div>
  )
}

export default Manager;
