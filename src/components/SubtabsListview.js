import React from 'react';
import { Route } from 'wouter';
import { useDispatch } from 'react-redux';
import { addSubtab } from '../redux/actions';
import Assignments from '../pages/Tasks/components/Assignments';
import MarkdownEditor from '../pages/Notebook/components/MarkdownEditor'
import SubtabListItem from './SubtabListItem';
import '../styles/SubtabsListview.scss'
import { getCurrentSubtabPath } from '../utilities/funcs';


function SubtabsListview({ tab }) {

  const dispatch = useDispatch();

  const handleSubtabAdding = () => {
    dispatch(addSubtab({
      icon: '🦞',
      title: 'default_tab'+Date.now().toString(),
      tab_path: tab.path
    }))
  }

  return (
    <div className='tab__content'>
      {
        !getCurrentSubtabPath()?
          < >
            <ul className='subtabs-listview'>
            {
              tab.subtabs.map(subtab => (
                <SubtabListItem
                  icon={subtab.icon}
                  title={subtab.title}
                  path={tab.path + subtab.path}
                  key={subtab.title}/>
              ))
            }
            </ul>
            <button onClick={handleSubtabAdding}>+ Add subtab</button>
          </>
        : null
      }
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