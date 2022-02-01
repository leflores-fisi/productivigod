import { Link, Route, useLocation } from 'wouter';
import '../styles/SubtabsListview.scss'

function SubtabsListview({session, Component}) {
  
  const [currentPath, ] = useLocation();
  // console.log(session, 'Session loaded from ListView')

  return (
    <div className='tab__content'>
      {
        currentPath === session.path ?
        <ul className='subtabs-listview'>
        {
          session.subtabs.map(subtab => (
            <Link to={session.path + subtab.path} key={subtab.title}>
              <li className='subtab'>
                <span className='subtab__icon'>
                  {subtab.icon}
                </span>
                <div className='subtab__title'>
                  {subtab.title}
                </div>
              </li>
            </Link>
          ))
        }
        </ul>
        : null
      }
      {
        session.subtabs.map((subtab) => (
          <Route path={session.path + subtab.path}>
            <Component content={subtab.content}/>
          </Route>
        ))
      }
    </div>
  )
}
export default SubtabsListview;