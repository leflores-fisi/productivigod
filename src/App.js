import { useEffect } from 'react';
import { Route } from 'wouter';
import GadgetSidebar from './components/GadgetSidebar'
import Navbar from './components/Navbar';

import Tasks from './pages/Tasks/index'
import Notebook from './pages/Notebook/index'
import Manager from './pages/Manager/index'

import {useTheme} from './hooks/useTheme'
import useLocalStorage from './hooks/useLocalStorage';
import { SessionContextProvider } from './context/SessionContext';
import './app.scss';

function App() {

  // Light theme by default
  const {theme, setTheme} = useTheme('light');
  const [hidden, setHidden] = useLocalStorage('sidebar-hidden', false);

  // once the app has renderizing
  useEffect(() => {
    console.info('Whole app renderizing...');
  }, []);

  const handleFolded = () => setHidden(!JSON.parse(hidden));

  return (
    <SessionContextProvider>
      <div className='app'>
        <aside className={`side-bar${JSON.parse(hidden)? ' hidden' : ''}`}>
          <button className='side-bar-switcher' onClick={handleFolded}>{'<'}</button>
          <div className='side-bar__panel'>
            <div className='user'>
              <div>Floresfisi</div>
              <div>Status: <span>Focused</span></div>
            </div>
          </div>
          <Navbar/>
          <button
            className='toggle-theme' 
            onClick={() => setTheme(theme === 'dark'? 'light' : 'dark')}>{theme}
          </button>
        </aside>

        <div className='app__container'>
          <header className='header'>
          </header>

          <div className='content'>
            <main className='window'>
              <Route path='/tasks' component={Tasks}/>
              <Route path='/notebook/:item?' component={Notebook}/>
              <Route path='/manager' component={Manager}/>
            </main>
            <GadgetSidebar/>
          </div>
        </div>
      </div> // app
    </SessionContextProvider>
  );
}

export default App;
