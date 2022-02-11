import React from 'react';
import LeftBar from './routes/dashboard/Components/LeftBar';
import MiddleBody from './routes/dashboard/Components/MiddleBody';
import RightBar from './routes/dashboard/Components/RightBar';

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
