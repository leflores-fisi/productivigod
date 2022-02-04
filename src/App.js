import { useEffect } from 'react';
import { Route } from 'wouter';
import TabsNavbar from './components/TabsNavbar';
import GadgetsSidebar from './components/GadgetsSidebar'

import Tab from './components/Tab';
// import Tasks from './pages/Tasks'
// import Notebook from './pages/Notebook'
// import Manager from './pages/Manager'

import { useTheme } from './hooks/useTheme'

import './App.scss';
import useLocalStorage from './hooks/useLocalStorage';
import { useStore } from 'react-redux';

function App() {

  // Light theme by default
  const [theme, setTheme] = useTheme('light');
  // Main sidebar showed by default
  const [hidden, setHidden] = useLocalStorage('sidebar-hidden', false);
  const handleFolded = () => setHidden(!JSON.parse(hidden));
  // Getting the app session from the store
  const store = useStore();
  const appSession = store.getState();
  

  // Once the app has renderizing
  useEffect(() => {
    console.info('Whole app renderizing...', appSession);
  }, []); // eslint-disable-line

  return (
    <div className='app'>
      <div className='app-wrapper'>
        <aside className={`side-bar${JSON.parse(hidden)? ' hidden' : ''}`}>
          <button className='side-bar-switcher' onClick={handleFolded}>{'<'}</button>
          <div className='side-bar__panel'>
            <div className='user'>
              <div>Floresfisi</div>
              <div>Status: <span>Focused</span></div>
            </div>
          </div>
          <TabsNavbar/>
          <button
            className='toggle-theme' 
            onClick={() => setTheme(theme === 'dark'? 'light' : 'dark')}>{theme}
          </button>
        </aside>

        <div className='app__container'>
          <header className='app-header'>
          </header>

          <div className='app-content'>
            <main className='tab'>
              <Route path={'/:tab/:subtab?'} component={Tab}/>
            </main>
            <GadgetsSidebar/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;