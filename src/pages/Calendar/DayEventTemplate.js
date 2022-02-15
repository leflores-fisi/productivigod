import { forwardRef } from 'react';
import './styles/DayEvent.scss'

export const DayEventTemplate = forwardRef((props, ref) => {


  return (
    < >
      <div className='day-event-template' ref={ref}>
        <header className='header'></header>
        <div className='textContent'></div>
      </div>
    </>
  );
})
