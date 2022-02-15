import { motion } from 'framer-motion';
import TodosGroup from './TodosGroup';
import './Assignments.scss'

function Assignments({ content }) {

  return (
    <motion.div
      className='assignments'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.2}}
    >
      <div className='tab-options'>
        <button className='neutral'>Design</button>
        <button className='neutral'>Tasks bullet</button>
      </div>
      {
        content.groups.map(group => {
          return <TodosGroup
            key={group.title}
            title={group.title}
            todos={group.todos}/>
        })
      }
    </motion.div>
  );
}
export default Assignments;