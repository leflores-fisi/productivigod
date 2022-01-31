import { Link, Route, useLocation } from 'wouter';

function ListView({session, Component}) {
  
  const [currentPath, ] = useLocation();
  // console.log(session, 'Session loaded from ListView')

  return (
    <div>
      {
        currentPath === session.path ?
        <ul>
        {
          session.subtabs.map((subtab) => (
            <Link to={session.path + subtab.path} key={subtab.title}>
              <div>
                <li>{subtab.title}</li>
              </div>
            </Link>
          ))
        }
        </ul>
        : null
      }
      {
        session.subtabs.map((item) => (
          <Route path={session.path + item.path}>
            <Component content={item.content}/>
          </Route>
        ))
      }
    </div>
  )
}
export default ListView;