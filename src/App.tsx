import React from 'react';
import LeftBar from './Components/LeftSIdebar/LeftBar';
import MiddleBody from './Components/Body/MiddleBody';
import RightBar from './Components/RightSidebar/RightBar';

const App: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className='flex-none'>
        <LeftBar />
      </div>
      <div className="flex-auto w-80">
        <MiddleBody />
      </div>
      <div className="flex-auto w-20">
        <RightBar />
      </div>
    </div>
  )
}

export default App;
