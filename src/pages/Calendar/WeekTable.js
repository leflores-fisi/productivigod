import moment from 'moment'
import { nanoid } from 'nanoid'
import DayColumn from './DayColumn'


function WeekTable({ weekOffset, calendarContent }) {

  // Dates objects
  const reference = moment().utc().add(weekOffset, 'week') // now
  const weekStart = reference.clone().startOf('week')
  const weekEnd = reference.clone().endOf('week')

  const day = weekStart.clone().subtract(1, 'day') // day to iterate the week

  // Creating a week based on the dates
  const weekCalendar = []
  while (day.isBefore(weekEnd, 'day')) {
    weekCalendar.push(day.add(1, 'day').clone())
  }

  return (
    <div className='week-table'>
      {
        weekCalendar.map(weekDay => {
          // Finding in the userCalendar if has an event that matches a calendar day of the app
          let matched_day = calendarContent.days.find(userDay => moment.utc(userDay.date).isSame(weekDay, 'day'))
          return <DayColumn key={nanoid()} date={weekDay} events={ matched_day ? matched_day.events : null}/>
        })
      }
    </div>
  );
}

export default WeekTable;