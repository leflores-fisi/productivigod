import { useLocation } from "wouter";

function TabHeader({tab}) {

  const [path, ] = useLocation();
  
  return (
    <header className='tab__header'>
      <div className='tab__header__title'>
        <span>{tab.icon}</span>
        <div>{tab.title}</div>
        <span>{path}</span>
      </div>
      <div className='tab__header__desc'>
        {tab.desc || 'No description provided yet, but soon...'}
      </div>
    </header>
  );
}
export default TabHeader;