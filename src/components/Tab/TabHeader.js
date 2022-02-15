//import Twemoji from 'react-twemoji';

function TabHeader({tab}) {
  
  return (
    <header className='tab__header'>
      <div className='tab-info'>
        <div className='icon'>
          <span>{tab.icon}</span>
        </div>
        <div className='text-header'>
          <div className='title'>{tab.title}</div>
        </div>
      </div>
      <div className='tab-cover'></div>
    </header>
  );
}
export default TabHeader;