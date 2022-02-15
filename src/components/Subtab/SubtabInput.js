import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { EmojiButton } from '@joeattardi/emoji-button';
import { addSubtab } from '../../redux/actions';

function SubtabInput({ setIsCreating }) {

  const dispatch = useDispatch()
  const [icon, setIcon] = useState('')
  const [titleToEdit, setTitleToEdit] = useState('')
  const inputRef = useRef()
  const iconTriggerRef = useRef()

  const handleSubtabAdding = () => {
    setIsCreating(false)
    dispatch(addSubtab({
      icon: icon,
      title: titleToEdit,
      subtab_type: 'CALENDAR_VIEWER'
    }))
  }
  
  useEffect(() => {
    // https://github.com/joeattardi/emoji-button
    const trigger = iconTriggerRef.current;
    const picker = new EmojiButton({style: 'twemoji'});
    trigger.addEventListener('click', () => picker.togglePicker(trigger));
    picker.on('emoji', selection => {
      // handle the selected emoji here
      setIcon(selection.emoji);
    });
    inputRef.current.focus()
  }, [])

  return (
    <div className='new-subtab-input'>
      <button ref={iconTriggerRef} className='edit-icon'>
        <div className='preview'>{icon}</div>
      </button>
      <input
        ref={inputRef}
        className='text-input'
        value={titleToEdit}
        onChange={(e) => setTitleToEdit(e.target.value)}
        onKeyDown={e => {if(e.key === 'Enter') handleSubtabAdding()}}
        onClick={(e) => e.stopPropagation()}
      />
      <div className='options'>
        <button onClick={() => setIsCreating(false)}>❌</button>
        <button onClick={handleSubtabAdding}>🆗</button>
      </div>
    </div>
  );
}

export default SubtabInput;