import { useRef } from "react"

function EditableDiv({ initial, className, handleBlur }) {

  const elementRef = useRef()
  const text = useRef(initial)

  const handleInput = (e) => {
    text.current = elementRef.current.textContent
  }

  return (
    <div
      className={className}
      contentEditable={true}
      suppressContentEditableWarning={true}
      ref={elementRef}
      onInput={handleInput}
      onBlur={() => handleBlur(text.current)}
    >
      {text.current}
    </div>
  )
}

export default EditableDiv