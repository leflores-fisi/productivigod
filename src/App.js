import SideBar from './components/Sidebar/SideBar';
import Tab from './components/Tab/Tab';
import GadgetsSidebar from './components/GadgetsSidebar'
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { Route } from 'wouter';
import AppOverlay from './components/Overlay/AppOverlay';
import { ActionsMenuContextProvider } from './context/LayoutContext';
import './App.scss';

function App() {

  // Getting the app session from the store
  const store = useStore();
  const appSession = store.getState();

  // Once the app has rendering
  useEffect(() => {
    console.info('Whole app rendering...', appSession);
  }, []); // eslint-disable-line

  return (
    <ActionsMenuContextProvider>
      <div className='app'>
        <div className='app-wrapper'>
          <SideBar/>
          <div className='app__container'>
            <header className='app-header'>
            </header>

            <div className='app-content'>
              <div className='app-content-wrapper'>
                <main className='tab'>
                  <Route path={'/:tab/:subtab?'} component={Tab}/>
                </main>
                <GadgetsSidebar/>
              </div>
            </div>
          </div>
        </div>
        <AppOverlay/>
      </div>
    </ActionsMenuContextProvider>
  );
}

export default App;