import { Link } from "wouter";

function SubtabListItem({ icon, title, path }) {
  return (
    <Link to={path}>
      <li className='subtab'>
        <span className='subtab__icon'>{icon}</span>
        <div className='subtab__title'>{title}</div>
        <div className='subtab__options'>
          <button>✍</button>
          <button>✖</button>
        </div>
      </li>
    </Link>

  );
}

export default SubtabListItem;