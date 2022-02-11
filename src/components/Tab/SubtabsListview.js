import React, { useState } from 'react';
import SubtabListItem from './SubtabListItem';
import SubtabInput from '../Subtab/SubtabInput';
import './styles/SubtabsListview.scss'

function SubtabsListview({ tab }) {

  const [isCreatingSubtab, setIsCreatingSubtab] = useState(false)

  const handleSubtabAdding = () => {
    setIsCreatingSubtab(true)
  }

  return (
    < >
      <ul className='subtabs-listview'>
      {
        tab.subtabs.map(subtab => (
          <SubtabListItem
            icon={subtab.icon}
            title={subtab.title}
            path={tab.path + subtab.path}
            key={subtab.title}/>
        ))
      }
      {
        isCreatingSubtab ?
          <SubtabInput setIsCreating={setIsCreatingSubtab}/>
        : null
      }
      </ul>
      <button onClick={handleSubtabAdding}>+ NEW subtab</button>
    </>
  )
}
export default SubtabsListview;