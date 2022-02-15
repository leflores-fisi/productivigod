import React from 'react';
import { Route } from 'wouter';
import Assignments from '../../pages/Tasks/Assignments';
import MarkdownEditor from '../../pages/Notebook/MarkdownEditor'
import Calendar from '../../pages/Calendar/Calendar'
import DailyPlanner from '../../pages/DailyPlanner/DailyPlanner'

function TabContent({tab}) {

  console.log(tab)

  return (
    < >
    {
      tab.type === 'DASHBOARD_VIEWER' ?

        tab.subtabs.map(subtab => (
          <React.Fragment key={subtab.path}>
          {
            subtab.type === 'ASSIGNMENTS_VIEWER'?
              <Route path={tab.path + subtab.path}>
                <Assignments key={subtab.path} content={subtab.content}/>
              </Route>
            :
            subtab.type === 'NOTEBOOK_VIEWER'?
              <Route path={tab.path + subtab.path}>
                <MarkdownEditor key={subtab.path} content={subtab.content}/>
              </Route>
            :
            subtab.type === 'DAILY_PLANNER_VIEWER'?
              <Route path={tab.path + subtab.path}>
                <DailyPlanner key={subtab.path} content={subtab.content}/>
              </Route>
            :
            subtab.type === 'CALENDAR_VIEWER'?
              <Route path={tab.path + subtab.path}>
                <Calendar key={subtab.path} content={subtab.content}/>
              </Route>
            : null
          }
          </React.Fragment>
        ))
      :
      < >
        {
          tab.type === 'DAILY_PLANNER_VIEWER'?
            <DailyPlanner key={tab.path} content={tab.content}/>
          :
          tab.type === 'CALENDAR_VIEWER'?
            <Calendar key={tab.path} content={tab.content}/>
          :
          tab.type === 'ASSIGNMENTS_VIEWER'?
            <Assignments key={tab.path} content={tab.content}/>
          :
          tab.type === 'NOTEBOOK_VIEWER'?
            <MarkdownEditor key={tab.path} content={tab.content}/>
          :
          null
        }
      </>
    }
    </>
  );
}

export default TabContent;