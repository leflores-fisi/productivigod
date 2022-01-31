import { Link } from 'wouter';
import '../styles/NavItem.scss'

function TabNavItem({path, icon = '❔', title, subtabs}) {

  const handleClick = () => {
    console.info('Setting tab to', path)
  }

  return (
    <Link to={path} onClick={handleClick}>
      <li className={'nav-item ' + path}>
          <span className='nav-item__icon'>
            {icon}
          </span>
          <div className='nav-item__title'>
            {title}
          </div>
      </li>
    </Link>
  );
}

export default TabNavItem;