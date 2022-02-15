import { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { useUser } from '../../hooks/useUser'
import UserPanel from './UserPanel'
import TabsNavbar from './TabsNavbar'
import './styles/Sidebar.scss'

function SideBar() {

  const user = useUser();
  // Light theme by default
  const [theme, setTheme] = useTheme('light')
  // Main sidebar pinned by default
  const [hidden, setHidden] = useState(false)
  const [pinned, setPinned] = useState(true)

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
      <UserPanel user={user}/>
      <TabsNavbar/>
      <button
        className='toggle-theme'
        onClick={() => setTheme(theme === 'dark'? 'light' : 'dark')}>{theme}
      </button>
    </aside>
  );
}

export default SideBar;