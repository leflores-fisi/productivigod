import { useLocation } from 'wouter';
import TabHeader from '../../components/TabHeader';
import { useAppSession } from '../../context/AppSessionContext';

function Manager() {
  
  const tab = useAppSession().tabs[2];
  const [path, ] = useLocation();

  return (
    <div>
      <TabHeader tab={tab}/>
    </div>
  )
}

export default Manager;