import { useLayoutEffect, useRef } from 'react'
import { nanoid } from 'nanoid'
import moment from 'moment'
import DayEvent from './DayEvent'
import { DayEventTemplate } from './DayEventTemplate'

function DayColumn({ date, events }) {

  const today = moment().utc()
  const columnRef = useRef()
  const templateRef = useRef()
  const templateHeight = useRef()

  let handleMouseDown, handleMouseMove, handleMouseUp
  handleMouseDown = (e) => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    
    let rect = columnRef.current.getBoundingClientRect()
    let offset = e.clientY - rect.top

    templateRef.current.style.top = `${offset}px`
    templateHeight.current = offset
  }
  handleMouseMove = (e) => {
    let rect = columnRef.current.getBoundingClientRect()
    let offset = e.clientY - rect.top
    templateRef.current.style.height = `${offset -  templateHeight.current}px`
  }
  handleMouseUp = () => {
    window.removeEventListener('mousedown', handleMouseDown)
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', handleMouseUp)
    //setOnInput(false)
    console.log('removing listeners')
  }
  const init = () => {
    window.removeEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousedown', handleMouseDown)
  }

  useLayoutEffect(() => {
    columnRef.current.removeEventListener('mousedown',init)
    columnRef.current.addEventListener('mousedown',init)
  })

  return (
    <div className='day-column'>
      <header className={`day-column__header ${date.isSame(today, 'day') ? 'today' : ''}`}>
        <div>
          <span className='week-day'>{date.format('ddd').toUpperCase()} - </span>
          <span className='week-date'>{date.format('DD')}</span>
        </div>
      </header>
      <div className='content' ref={columnRef}>
        {
          events ?
          events.map(event => <DayEvent key={nanoid()} range={event.range} textContent={event.text}/>)
          : null
        }
        <DayEventTemplate ref={templateRef}/>
      </div>
    </div>
  );
}

export default DayColumn;