import { forwardRef } from 'react';
import './DayEvent.scss'

export const DayEventTemplate = forwardRef((props, ref) => {


  return (
    < >
      <div className='day-event-template' ref={ref}>
        <header className='header'></header>
        <div className='text'>Hello mohammed</div>
      </div>
    </>
  );
})
