import moment from 'moment'
import { nanoid } from 'nanoid'
import DayColumn from './DayColumn'


function WeekTable({ weekOffset }) {

  const reference = moment().utc().add(weekOffset, 'week') // now
  const weekStart = reference.clone().startOf('week')
  const weekEnd = reference.clone().endOf('week')

  const day = weekStart.clone().subtract(1, 'day')

  // Template of a user day
  // let day = {
  //   date: '2022-02-10', // reference day
  //   events: []
  // }

  const week = []
  while (day.isBefore(weekEnd, 'day')) {
    week.push({ date: day.add(1, 'day').clone() })
  }

  return (
    < >
      <div className='calendar-marks'></div>
      {
        week.map(day => (
          <DayColumn key={nanoid()} day={day}/>
        ))
      }
    </>
  );
}

export default WeekTable;