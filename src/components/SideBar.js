import TabsNavbar from './TabsNavbar'
import { useTheme } from '../hooks/useTheme'
import { useState } from 'react'
import { useUser } from '../hooks/useUser'

function SideBar() {

  // Light theme by default
  const [theme, setTheme] = useTheme('light')
  // Main sidebar pinned by default
  const [hidden, setHidden] = useState(false)
  const [pinned, setPinned] = useState(true)
  const user = useUser();

  const handlePinnedSwitcher = () => {
    setPinned((previous) => {
      if (previous === true) {
        setHidden(true)
        return false
      }
      else return true
    })
  }

  return (
    <aside 
      className={`app-sidebar${(hidden && !pinned)? ' hidden' : ''}`}
      onMouseLeave={() => {if (!pinned) setHidden(true)}}
      onMouseEnter={() => {if (!pinned) setHidden(false)}}
      >
      <button className='sidebar-switcher' onClick={handlePinnedSwitcher}>📌</button>
      <div className='app-sidebar__panel'>
        <div className='user'>
          <div>{user.name}</div>
          <div>Status: <span>{user.status}</span></div>
        </div>
      </div>
      <TabsNavbar/>
      <button
        className='toggle-theme' 
        onClick={() => setTheme(theme === 'dark'? 'light' : 'dark')}>{theme}
      </button>
    </aside>
  );
}

export default SideBar;