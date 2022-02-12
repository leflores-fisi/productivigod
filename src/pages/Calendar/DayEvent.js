import { useLayoutEffect, useRef, useState } from "react";

function DayEvent({ range, textContent }) {

  const dayRef = useRef()
  const column_height = 1440; // 60px * 24hours
  const [top, setTop] = useState(0)
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    setTop(range[0]*column_height/1440)
    setHeight((range[1]-range[0])*column_height/1440)
  }, [top, height, range])

  return (
    <div className='day-event' ref={dayRef} style={{top: top, height: height}}>
      <header className='header'></header>
      <div className='text'>{textContent}</div>
    </div>
  );
}

export default DayEvent;