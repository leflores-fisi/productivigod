import { Link } from "wouter";
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { editSubtab, removeSubtab } from "../../redux/actions";
import { getCurrentSubtabPath, getCurrentTabPath } from "../../utilities/funcs";

function SubtabListItem({ icon, title, path }) {

  const dispatch = useDispatch();
  const [editing, setEditing] = useState(title ? false : true)
  const [titleToEdit, setTitleToEdit] = useState(title)

  return (
    <Link to={path}>
      <li className='subtab'>
      {
        editing ?
        < >
          <span className='icon'>{icon}</span>
          <input
            className='title'
            value={titleToEdit}
            onChange={(e) => setTitleToEdit(e.target.value)}
            onClick={(e) => e.stopPropagation()}
          />
          <div className='options'>
            <button onClick={(e) => {
              e.stopPropagation()
              setEditing(false)
            }}>❌</button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                dispatch(editSubtab({
                  new_icon: '🎃',
                  new_title: titleToEdit,
                  subtab_path: getCurrentSubtabPath(path)
                }))
                setEditing(false)
              }}>🆗</button>
          </div>
        </>
        :
        < >
          <span className='icon'>{icon}</span>
          <div className='title'>{title}</div>
          <div className='options'>
            <button onClick={(e) => {
              e.stopPropagation()
              setEditing(true)
            }}>✍</button>
            <button onClick={(e) => {
              e.stopPropagation()
              dispatch(removeSubtab({
                title: title,
                tab_path: getCurrentTabPath()
              }))
            }}>✖</button>
          </div>
        </>
      }
      </li>
    </Link>

  );
}

export default SubtabListItem;