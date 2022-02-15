import { useState, useEffect } from 'react'
import moment from 'moment'

function AppHeader() {

  const [time, setTime] = useState(moment().format('hh:mm:ss'))

  useEffect(() => {
    window.setInterval(() => {
      setTime(moment().format('hh:mm:ss'))
    }, 200)
  }, [])

  return (
    <header className='app-header'>
      <div className='time-hour'>{time}<span>——</span></div>
    </header>
  )
}
export default AppHeader