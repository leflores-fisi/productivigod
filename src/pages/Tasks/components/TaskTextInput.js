import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTask } from '../../../redux/actions'

function TaskTextInput(/*{todos}*/) {

  const [text, setText] = useState();
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setText(e.target.value);
    if (e.key === 'Enter') {
      dispatch(addTask(text.trim(), 'Uncompleted'));
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