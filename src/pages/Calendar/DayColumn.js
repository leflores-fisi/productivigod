import { useLayoutEffect, useRef, useContext } from 'react'
import { nanoid } from 'nanoid'
import moment from 'moment'
import DayEvent from './DayEvent'
import { DayEventTemplate } from './DayEventTemplate'
import { ActionsMenuContext } from '../../context/LayoutContext'

function DayColumn({ date, events }) {

  const today = moment().utc()
  const actionsMenu = useContext(ActionsMenuContext)
  const columnRef = useRef()
  const templateRef = useRef()
  const initialMouseY = useRef()

  let handleMouseDown, handleMouseMove, handleMouseUp, clearListeners

  handleMouseDown = (e) => {
    
    if (e.button === 0) {
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('mousemove', handleMouseMove)
      let rect = columnRef.current.getBoundingClientRect()
      let columnY = e.clientY - rect.top
  
      templateRef.current.style.top = `${columnY}px`
      initialMouseY.current = columnY
    }
    else clearListeners()
  }
  handleMouseMove = (e) => {
    let rect = columnRef.current.getBoundingClientRect()
    let columnY = e.clientY - rect.top
    if (columnY > initialMouseY.current) {
      templateRef.current.style.height = `${columnY - initialMouseY.current}px`
    }
    else {
      templateRef.current.style.top = `${columnY}px`
      templateRef.current.style.height = `${initialMouseY.current - columnY}px`
    }
  }
  handleMouseUp = (e) => {
    clearListeners()

    console.log('removing listeners')
    actionsMenu.visibility.setVisibility(true)
    let rect = columnRef.current.getBoundingClientRect()
    let columnPosX = rect.left + rect.width
    let columnPosY = rect.top + (initialMouseY.current)

    actionsMenu.position.setMousePos({
      x: columnPosX,
      y: columnPosY
    })
  }
  clearListeners = () => {
    window.removeEventListener('mousedown', handleMouseDown)
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', handleMouseUp)
  }

  const init = () => {
    window.removeEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousedown', handleMouseDown)
  }
  useLayoutEffect(() => {
    columnRef.current.removeEventListener('mousedown', init)
    columnRef.current.addEventListener('mousedown', init)
  }, []) // eslint-disable-line

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