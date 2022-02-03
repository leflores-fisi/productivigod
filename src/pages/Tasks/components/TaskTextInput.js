import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useLocation } from 'wouter';
import { addTask } from '../../../redux/actions'

function TaskTextInput({ groupTitle }) {

  const [text, setText] = useState();
  const dispatch = useDispatch();
  const [path, ] = useLocation();

  const handleInput = (e) => {
    setText(e.target.value);
    if (text && e.key === 'Enter') {
      dispatch(addTask(text.trim(), 'XD', path, groupTitle));
      setText("");
    }
    e.target.focus();
  }

  return (
    <div>
      <input onKeyDown={handleInput} onChange={handleInput} type='text'></input>
    </div>
  );
}

export default TaskTextInput;