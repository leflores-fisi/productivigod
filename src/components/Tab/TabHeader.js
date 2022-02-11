import { useLocation } from "wouter";

function TabHeader({tab}) {

  const [path, ] = useLocation();
  
  return (
    <header className='tab__header'>
      <div className='icon'>{tab.icon}</div>
      <div className='text-header'>
        <div className='title'>{tab.title}</div>
        <span className='route'>{path}</span>
      </div>
      <div className='description'>
        {tab.desc || 'No description provided yet, but soon...'}
      </div>
    </header>
  );
}
export default TabHeader;