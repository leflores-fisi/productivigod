import { Link, Route } from 'wouter';
import Assignments from '../pages/Tasks/components/Assignments';
import MarkdownEditor from '../pages/Notebook/components/MarkdownEditor'
import '../styles/SubtabsListview.scss'


function SubtabsListview({ tab }) {

  return (
    <div className='tab__content'>
      <ul className='subtabs-listview'>
        {
          tab.subtabs.map(subtab => (
            <Link to={tab.path + subtab.path} key={subtab.title}>
              <li className='subtab'>
                <span className='subtab__icon'>{subtab.icon}</span>
                <div className='subtab__title'>{subtab.title}</div>
              </li>
            </Link>
          ))
        }
      </ul>
      <div className='HOLA HTML'>
        {
          tab.subtabs.map(subtab => (
            < >
              {
                tab.type === 'ASSIGNMENTS_VIEWER'?
                  <Route path={tab.path + subtab.path}>
                    <Assignments content={subtab.content}/>
                  </Route>
                :
                tab.type === 'NOTEBOOK_VIEWER'?
                  <Route path={tab.path + subtab.path}>
                    <MarkdownEditor content={subtab.content}/>
                  </Route>
                :
                  <div>
                    FATAL ERROR IN SUBTASKLISTVIEW.JS AYUDAAAAAAAAAAAAAAAAAAA
                  </div>
              }
            </>
          ))
        }
      </div>
    </div>
  )
}
export default SubtabsListview;