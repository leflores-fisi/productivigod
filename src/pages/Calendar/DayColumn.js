import moment from 'moment'
import { useEffect, useRef } from 'react';

function DayColumn({ day }) {

  const today = moment().utc();
  const dimensionsRef = useRef()

  useEffect(() => {
    //drawBackground()
    //window.addEventListener('resize', drawBackground)
    dimensionsRef.current.addEventListener('click', (e) => {
      // e = Mouse click event.
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left; //x position within the element.
      let y = e.clientY - rect.top;  //y position within the element.
      console.log(`x: ${x} y: ${y}`);
    })

  }, [])

  return (
    <div className='day-column'>
      <header className={`day-column__header ${day.date.isSame(today, 'day') ? 'today' : ''}`}>
        {/* <div>{day.date.format('MMMM')}</div> */}
        <div>{day.date.format('dddd')}</div>
        <div>{day.date.format('DD')}</div>
      </header>
      <div className='content' ref={dimensionsRef}>
        <canvas className='background'></canvas>
      </div>
    </div>
  );
}

export default DayColumn;