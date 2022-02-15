import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Picker } from 'emoji-mart'
import { addTab } from '../../redux/actions';
import './styles/Modal.scss'
import 'emoji-mart/css/emoji-mart.css'

function Modal({ displayed, setDisplayed }) {

  const [selectedTab, setSelectedTab] = useState({preview: 'https://i.ytimg.com/vi/cW5WiB6zc9g/maxresdefault.jpg'})
  const [iconInput, setIconInput] = useState('')
  const [titleInput, setTitleInput] = useState('')
  const [selectingIcon, setSelectingIcon] = useState(false)
  const dispatch = useDispatch();

  const tab_previews = {
    todolist: {
      type: 'ASSIGNMENTS_VIEWER',
      preview:  'https://cdn.dribbble.com/users/1192538/screenshots/14566571/media/e59f0424ffe0d9a6c0a578eb74b1cc06.png?compress=1&resize=400x300'
    },
    notebook: {
      type: 'NOTEBOOK_VIEWER',
      preview:  'https://uploads-ssl.webflow.com/5f1845464aa182255025d760/5f1845464aa182514e25d7f6_ipad-main.png'
    },
    folder: {
      type: 'DASHBOARD_VIEWER',
      preview:  'https://images-sg.girlstyle.com/wp-content/uploads/2020/05/%E5%AB%A5%E5%AB%A5.jpeg'
    }
  }
  

  const handleSelectTab = (tab) => setSelectedTab(tab_previews[tab])
  const handleTitleInput = (e) => setTitleInput(e.target.value)

  const handleTabAdding = () => {
    dispatch(addTab({
      icon: iconInput || '❔',
      title: titleInput || 'unknown',
      type: selectedTab.type
    }))
    setDisplayed(false)
  }

  useEffect(() => {
  }, [])

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
                <li><button className='neutral' onClick={() => handleSelectTab('folder')}>Folder</button></li>
                <li><button className='neutral' onClick={() => handleSelectTab('todolist')}>Todolist</button></li>
                <li><button className='neutral' onClick={() => handleSelectTab('notebook')}>Notebook</button></li>
              </ul>
              <div className='preview-img'>
                <img
                  alt='Tab preview'
                  src={selectedTab.preview}/>
              </div>
            </div>
            <div className='modal-inputs__tab-title'>
              <div className='title'>Icon</div>
              <button className='edit-icon' onClick={() => setSelectingIcon(true)}>
                {iconInput || 'Select icon'}
              </button>
                {
                  selectingIcon ?
                  <Picker
                    set='twitter'
                    onSelect={(emoji) => {
                      setIconInput(emoji.native)
                      setSelectingIcon(false)
                    }}
                    title='Select an icon'
                    emoji='point_up'
                    emojiSize={20}
                    sheetSize={32}
                  />
                  : null
                }
            </div>
            <div className='modal-inputs__tab-title'>
              <div className='title'>Title</div>
              <input className='text-input' onChange={handleTitleInput} value={titleInput}/>
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