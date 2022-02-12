//import dayjs from 'dayjs'
import { useState } from 'react';
import './Calendar.scss'
import SideHours from './SideHours';
import WeekTable from './WeekTable';

function Calendar() {

  const [weekOffset, setWeekOffset] = useState(0)

  return (
    <div>
      <div className='calendar-options'>
        <button className='neutral' onClick={() => setWeekOffset(prev => prev-1)}>{'<'}</button>
        <button className='neutral' onClick={() => setWeekOffset(prev => prev+1)}>{'>'}</button>
        {/* <button className='neutral'>Week</button>
        <button className='neutral'>Month</button> */}
      </div>

      <div className='calendar'>
        <div className='wrapper'>
          <SideHours/>      
          <WeekTable weekOffset={weekOffset}/>
        </div>     
      </div>
    </div>
  );
}

export default Calendar;