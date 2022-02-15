//import dayjs from 'dayjs'
import { useState } from 'react';
import SideHours from './SideHours';
import WeekTable from './WeekTable';
import './styles/Calendar.scss'
import { motion } from 'framer-motion';

function Calendar({ content }) {

  const [weekOffset, setWeekOffset] = useState(0)

  return (
    <div>
      <div className='calendar-options'>
        <button className='neutral' onClick={() => {setWeekOffset(prev => prev-1)}}>{'<'}</button>
        <button className='neutral' onClick={() => {setWeekOffset(prev => prev+1)}}>{'>'}</button>
        {/* <button className='neutral'>Week</button>
        <button className='neutral'>Month</button> */}
      </div>

      <div className='calendar'>
        <motion.div
          layout
          className='wrapper'
          animate={{opacity: [0.7 + weekOffset*0.001, 1]}}
          transition={{duration: 0.4}}
        >
          <SideHours/>      
          <WeekTable weekOffset={weekOffset} calendarContent={content}/>
        </motion.div>
      </div>
    </div>
  );
}

export default Calendar;