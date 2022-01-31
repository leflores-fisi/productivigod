import { Link } from 'wouter';
import '../styles/NavItem.scss'

function TabNavItem({path, icon = '❔', name, subtabs}) {

  const handleClick = () => {
    console.info('Setting tab to', path)
  }

  return (
    <Link to={path} onClick={handleClick}>
      <div className={'nav-item ' + path}>
        <span>{icon}</span>
        <li>{name}</li>
      </div>
    </Link>
  );
}

export default TabNavItem;