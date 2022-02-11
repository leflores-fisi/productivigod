//import dayjs from 'dayjs'
import { useState } from 'react';
import './Calendar.scss'
import WeekTable from './WeekTable';

function Calendar() {

  const [weekOffset, setWeekOffset] = useState(0)

  return (
    <div>
      <div>Now in calendar</div>
      <button className='neutral' onClick={() => setWeekOffset(prev => prev-1)}>{'<'}</button>
      <button className='neutral' onClick={() => setWeekOffset(prev => prev+1)}>{'>'}</button>
      <button className='neutral'>Week</button>
      <button className='neutral'>Month</button>
      <div className='calendar'>
        <aside className='calendar__side-hours'>

        </aside>        
        <div className='calendar__content'>
          <div className='wrapper'>
            <WeekTable weekOffset={weekOffset}/>
          </div>
        </div>        
      </div>
    </div>
  );
}

export default Calendar;