import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTab } from '../redux/actions';
import '../styles/Modal.scss'

function Modal({ displayed, setDisplayed }) {

  const [selectedTab, setSelectedTab] = useState({preview: 'https://i.ytimg.com/vi/cW5WiB6zc9g/maxresdefault.jpg'})
  const [titleInput, setTitleInput] = useState('')
  const dispatch = useDispatch();

  const tab_previews = {
    todolist: {
      type: 'ASSIGNMENTS_VIEWER',
      preview:  'https://cdn.dribbble.com/users/1192538/screenshots/14566571/media/e59f0424ffe0d9a6c0a578eb74b1cc06.png?compress=1&resize=400x300',
    },
    notebook: {
      type: 'NOTEBOOK_VIEWER',
      preview:  'https://uploads-ssl.webflow.com/5f1845464aa182255025d760/5f1845464aa182514e25d7f6_ipad-main.png',
    }
  }
  
  //
  const handleSelectTab = (tab) => setSelectedTab(tab_previews[tab])
  
  const handleTitleInput = (e) => {
    setTitleInput(e.target.value)
  }
  const handleTabAdding = () => {
    dispatch(addTab({
      type: selectedTab.type,
      icon: '🐱‍👤',
      title: titleInput,
    }))
    setDisplayed(false)
  }

  return (
    <div className='modal' onClick={() => setDisplayed(false)} style={{display: `${displayed? 'flex' : 'none'}`}}>
      <div className='modal-container' onClick={(e) => e.stopPropagation()}>
        <header className='modal-header'>
          <div className='modal-header__title'>New tab</div>
        </header>
        <div className='modal-content'>
          <div className='modal-description'>Let's create something nice</div>
          <div className='modal-inputs'>
            <div className='modal-preview'>
              <ul className='modal-preview__tabs-list'>
                <li><button onClick={() => handleSelectTab('todolist')}>Task manager</button></li>
                <li><button onClick={() => handleSelectTab('notebook')}>Notebook</button></li>
              </ul>
              <div className='preview-img'>
                <img
                  alt='Tab preview'
                  src={selectedTab.preview}/>
              </div>
            </div>
            <div className='modal-inputs__tab-title'>
              <div className='title'>Title</div>
              <input onChange={handleTitleInput} value={titleInput}/>
            </div>
            <div className='modal-inputs__create-tab-btn'>
              <button onClick={handleTabAdding}><span>✨ </span>Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;