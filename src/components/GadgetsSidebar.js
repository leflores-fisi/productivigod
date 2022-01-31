import React from "react";
import '../styles/Gadgets-sidebar.scss'

function GadgetsSidebar() {

  return (
    <aside className='gadgets'>
      <div className='gadgets__music-player'>
        <img alt='Not loaded' src='./assets/images/music_player.jpg'/>
      </div>
    </aside>
  )
}

export default GadgetsSidebar;