import { useEffect } from 'react';
import { Route } from 'wouter';
import TabsNavbar from './components/TabsNavbar';
import GadgetsSidebar from './components/GadgetsSidebar'

import Tasks from './pages/Tasks/index'
import Notebook from './pages/Notebook/index'
import Manager from './pages/Manager/index'

import { useTheme } from './hooks/useTheme'
import useLocalStorage from './hooks/useLocalStorage';
import { AppSessionContextProvider } from './context/AppSessionContext';
import './App.scss';

function App() {

  // Light theme by default
  const {theme, setTheme} = useTheme('light');
  // Main sidebar showed by default
  const [hidden, setHidden] = useLocalStorage('sidebar-hidden', false);
  const handleFolded = () => setHidden(!JSON.parse(hidden));

  // once the app has renderizing
  useEffect(() => {
    console.info('Whole app renderizing...');
  }, []);

  return (
    <div className='app'>
      <AppSessionContextProvider>
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
              <Route path='/tasks/:group?' component={Tasks}/>
              <Route path='/notebook/:note?' component={Notebook}/>
              <Route path='/manager' component={Manager}/>
            </main>
            <GadgetsSidebar/>
          </div>
        </div>
      </AppSessionContextProvider>
    </div>
  );
}

export default App;
