import { useLayoutEffect, useRef, useContext, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { nanoid } from 'nanoid'
import DayEvent from './DayEvent'
import { DayEventTemplate } from './DayEventTemplate'
import { ActionsMenuContext } from '../../context/ActionsMenuContext'
import { pxToNumber } from '../../utilities/funcs'
import { scheduleEvent, scheduleMood } from '../../redux/actions'

function DayColumn({ date, events }) {

  const today = moment().utc()
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const actionsMenu = useContext(ActionsMenuContext)
  const actionsList = ['New event', 'New mood', 'Cancel']
  
  const columnRef     = useRef()
  const templateRef   = useRef() // forward ref to <DayEventTemplate>
  const initialMouseY = useRef()

  const menuClickCallback = () => {
      
    switch (actionsMenu.userSelection.current) {
      case 'New event':
        // dispatch(scheduleEvent({
        //   date: date.format('YYYY-MM-DD'),
        //   at: pxToNumber(templateRef.current.style.top),
        //   length: pxToNumber(templateRef.current.style.height),
        //   text: ''
        // }))
        break
      case 'New mood':
        // dispatch(scheduleMood({
        //   date: date.format('YYYY-MM-DD'),
        //   at: pxToNumber(templateRef.current.style.top),
        //   length: pxToNumber(templateRef.current.style.height),
        //   mood: ''
        // }))
        break
      case 'Cancel':
        setIsEditing(false)
        break
      default: break
    }
  }

  let handleMouseDown, handleMouseMove, handleMouseUp, clearListeners

  handleMouseDown = (e) => {

    console.log(e.target)
    
    if (e.button === 0) {

      if (e.target.classList.contains('day-column__content')) {
        setIsEditing(true)
        document.addEventListener('mouseup', handleMouseUp)
        document.addEventListener('mousemove', handleMouseMove)
        let rect = columnRef.current.getBoundingClientRect()
        let mouseY = e.clientY - rect.top
    
        initialMouseY.current = Math.floor((mouseY/15))*15
        templateRef.current.style.top = `${Math.floor((mouseY/15))*15}px`
        templateRef.current.style.height = '0px'
        templateRef.current.style.display = 'none'
      }
      else if (e.target.classList.contains('day-column__content')) {

      }
      else {
        document.addEventListener('mouseup', handleMouseUp)
      }
    }
    else clearListeners()
  }
  handleMouseMove = (e) => {
    templateRef.current.style.display = 'flex'
    let rect = columnRef.current.getBoundingClientRect()
    let mouseY = e.clientY - rect.top // mouse current position on column
    // Dragging down
    if (mouseY > initialMouseY.current) {
      templateRef.current.style.top = `${initialMouseY.current}px`
      templateRef.current.style.height = `${Math.floor((mouseY - initialMouseY.current)/15)*15 + 15}px`
    }
    else if (Math.floor((mouseY/15))*15 === initialMouseY.current) {
      templateRef.current.style.top = `${initialMouseY.current}px`
      templateRef.current.style.height = '0px'
    }
    // Dragging up
    else {
      templateRef.current.style.top = `${Math.floor(mouseY/15)*15}px`
      templateRef.current.style.height = `${Math.ceil((initialMouseY.current - mouseY)/15)*15}px`
    }
  }
  handleMouseUp = () => {
    clearListeners()
    console.log('removing listeners')
    if (pxToNumber(templateRef.current.style.height) > 10) {

      let rect = columnRef.current.getBoundingClientRect()
      let columnPosX = rect.left + rect.width
      let columnPosY = rect.top + initialMouseY.current + pxToNumber(templateRef.current.style.height) - 40
      
      actionsMenu.visibility.setVisibility(true)
      actionsMenu.position.setMousePos({
        x: columnPosX,
        y: columnPosY
      })
    }
  }
  clearListeners = () => {
    document.removeEventListener('mousedown', handleMouseDown)
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  const init = () => {
    document.removeEventListener('mousedown', handleMouseDown)
    document.addEventListener('mousedown', handleMouseDown)
  }
  useLayoutEffect(() => {
    actionsMenu.options.setList(actionsList)
    columnRef.current.removeEventListener('mousedown', init)
    columnRef.current.addEventListener('mousedown', init)
  }, []) // eslint-disable-line

  useEffect(() => {
    // Putting the callback on the actionsList menu context
    actionsMenu.callback.current = menuClickCallback
  }, [isEditing]) // eslint-disable-line
  

  return (
    <div className='day-column'>
      <header className={`day-column__header ${date.isSame(today, 'day') ? 'today' : ''}`}>
        <div>
          <span className='week-day'>{date.format('ddd').toUpperCase()} - </span>
          <span className='week-date'>{date.format('DD')}</span>
        </div>
      </header>
      <div className='day-column__content' ref={columnRef}>
        {
          events ? events.map(event => <DayEvent key={nanoid()} event={event} textContent={event.text}/>) : null
        }
        {
          isEditing ? <DayEventTemplate ref={templateRef}/> : null
        }
      </div>
    </div>
  );
}

export default DayColumn;