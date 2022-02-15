import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { pxToNumber } from "../../utilities/funcs";

function DayEvent({ event, textContent }) {

  const dayRef = useRef()
  const textareaRef = useRef()
  const hour_height = pxToNumber(getComputedStyle(document.documentElement).getPropertyValue('--hour-height'));
  const [top, setTop] = useState(0)
  const [height, setHeight] = useState(0)
  const [text, setText] = useState(textContent)

  useLayoutEffect(() => {
    setTop(event.at * hour_height/60)
    setHeight(event.length * hour_height/60)
  }, []) // eslint-disable-line
  const handleWriting = (e) => {
    setText(e.target.value)
  }

  return (
    <motion.div
      className='day-event'
      ref={dayRef}
      style={{top: top, height: height}}
      onClick={() => {
        textareaRef.current.focus()
        console.log('click')}
      }
      initial={{
        scale: 1.005
      }}
      animate={{
        scale: 1,
        position: 'relative'
      }}
      transition={{
        duration: 0.2
      }}
    >
      <header className='header'></header>
      <textarea
        className='textContent'
        ref={textareaRef}
        value={text}
        onChange={handleWriting}
        onMouseUp={(e) => {e.preventDefault()}}
      />
    </motion.div>
  );
}

export default DayEvent;