import React from 'react';
import Navbar from './Component/Navbar'
import APIcallContextProvider from './Context/APIcall';

function App() {
  return (
    <div>
      <APIcallContextProvider>
        <Navbar/>
      </APIcallContextProvider>
    </div>
  );
}

export default App;
