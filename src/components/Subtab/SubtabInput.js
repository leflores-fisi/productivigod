import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { EmojiButton } from '@joeattardi/emoji-button';
import { addSubtab } from '../../redux/actions';
import { getCurrentTabPath } from "../../utilities/funcs";

function SubtabInput({ setIsCreating }) {

  const dispatch = useDispatch()
  const [icon, setIcon] = useState('')
  const [titleToEdit, setTitleToEdit] = useState('')
  const inputRef = useRef()

  const handleSubtabAdding = () => {
    setIsCreating(false)
    dispatch(addSubtab({
      icon: icon,
      title: titleToEdit,
      tab_path: getCurrentTabPath()
    }))
  }
  
  useEffect(() => {
    // https://github.com/joeattardi/emoji-button
    const trigger = document.querySelector('#emoji-trigger');
    const picker = new EmojiButton();
    trigger.addEventListener('click', () => picker.togglePicker(trigger));
    picker.on('emoji', selection => {
      // handle the selected emoji here
      setIcon(selection.emoji);
    });
    inputRef.current.focus()
  }, [])

  return (
    <div className='new-subtab-input'>
      <button id='emoji-trigger' className='edit-icon'>
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