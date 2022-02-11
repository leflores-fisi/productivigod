import React from 'react';
import { Route } from 'wouter';
import Assignments from '../../pages/Tasks/Assignments';
import MarkdownEditor from '../../pages/Notebook/MarkdownEditor'
import Calendar from '../../pages/Calendar/Calendar'
import DailyPlanner from '../../pages/DailyPlanner/DailyPlanner'

function TabContent({tab}) {

  return (
    < >
    {
      tab.hasOwnProperty('subtabs') ?

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
      :
      < >
        {
          tab.type === 'DAILY_PLANNER_VIEWER'?
            <DailyPlanner content={tab.content}/>
          :
          tab.type === 'CALENDAR_VIEWER'?
            <Calendar content={tab.content}/>
          :
          null
        }
      </>
    }
    </>
  );
}

export default TabContent;