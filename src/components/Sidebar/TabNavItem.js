import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'wouter';
import { editTab, removeTab } from '../../redux/actions';
import './styles/NavItem.scss'

function TabNavItem({path, icon = '❔', title}) {

  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false)
  const [titleToEdit, setTitleToEdit] = useState(title)
  
  const handleClick = () => {
    console.info('Setting tab to', path)
  }

  return (
    <Link to={path} onClick={handleClick}>
      <li className={'nav-item ' + path}>
      {
        editing?
        < >
          <span className='nav-item__icon'>{icon}</span>
          <input
            className='nav-item__title'
            value={titleToEdit}
            onChange={(e) => setTitleToEdit(e.target.value)}/>
          <div className='nav-item__options'>
            <button onClick={() => setEditing(false)}>❌</button>
            <button
              onClick={() => dispatch(editTab({
                new_icon: '🎃',
                new_title: titleToEdit,
                tab_path: path
              }))}>🆗</button>
          </div>
        </>
        :
        < >
          <span className='nav-item__icon'>{icon}</span>
          <div className='nav-item__title'>{title}</div>
          <div className='nav-item__options'>
            <button onClick={() => setEditing(true)}>✍</button>
            <button onClick={() => {dispatch(removeTab({tab_path: path}))}}>✖</button>
          </div>
        </>
      }
      </li>
    </Link>
  );
}

export default TabNavItem;