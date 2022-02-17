import TodosGroup from './TodosGroup';
import './Assignments.scss'
import { useState } from 'react';

function Assignments({ content }) {

  const [design, setDesign] = useState(content.design)
  const handleDesignChange = () => {
    setDesign(prev => prev === 'LIST' ? 'BOARD' : 'LIST')
  }

  return (
    <div className={`assignments`}>
      <div className='tab-options'>
        <button className='neutral' onClick={handleDesignChange}>{design.toLowerCase()}</button>
        <button className='neutral'>Tasks bullet</button>
      </div>
      <div className={`assignments-groups ${design.toLowerCase()}`}>
        {
          content.groups.map(group => {
            return <TodosGroup
              key={group.title}
              title={group.title}
              todos={group.todos}/>
          })
        }
      </div>
    </div>
  );
}
export default Assignments;