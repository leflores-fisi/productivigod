import { Link } from 'wouter';
import '../styles/NavItem.scss'

function NavItem({path, icon = '❔', name, submenus}) {

  const handleClick = () => {
    console.log(path)
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

export default NavItem;