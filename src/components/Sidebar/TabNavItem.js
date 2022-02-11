import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'wouter';
import { editTab, removeTab } from '../../redux/actions';
import './styles/TabNavItem.scss'

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
        <div className='nav-item__content'>
        {
          editing?
          < >
            <span className='icon'>{icon}</span>
            <input
              className='title'
              value={titleToEdit}
              onChange={(e) => setTitleToEdit(e.target.value)}/>
            <div className='options'>
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
            <span className='icon'>{icon}</span>
            <div className='title'>{title}</div>
            <div className='options'>
              <button onClick={() => setEditing(true)}>✍</button>
              <button onClick={() => {dispatch(removeTab({tab_path: path}))}}>✖</button>
            </div>
          </>
        }
        </div>
      </li>
    </Link>
  );
}

export default TabNavItem;