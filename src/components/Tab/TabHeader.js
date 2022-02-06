import { useLocation } from "wouter";

function TabHeader({tab}) {

  const [path, ] = useLocation();
  
  return (
    <header className='tab__header'>
      <div className='tab__header__title'>
        <span>{tab.icon}</span>
        <div>{tab.title}</div>
        <span style={{fontSize: '0.8rem', fontWeight: 100, marginBottom: 2, marginLeft: 4}}>{path}</span>
      </div>
      <div className='tab__header__desc'>
        {tab.desc || 'No description provided yet, but soon...'}
      </div>
    </header>
  );
}
export default TabHeader;