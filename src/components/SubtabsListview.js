import React from 'react';
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
      < >
        {
          tab.subtabs.map(subtab => (
            <React.Fragment key={subtab.path}>
              {
                tab.type === 'ASSIGNMENTS_VIEWER'?
                  <Route path={tab.path + subtab.path}>
                    <Assignments key={subtab.path} content={subtab.content}/>
                  </Route>
                :
                tab.type === 'NOTEBOOK_VIEWER'?
                  <Route path={tab.path + subtab.path}>
                    <MarkdownEditor key={subtab.path} content={subtab.content}/>
                  </Route>
                :
                null
              }
            </React.Fragment>
          ))
        }
      </>
    </div>
  )
}
export default SubtabsListview;