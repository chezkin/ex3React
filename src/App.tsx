import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Counter from './components/Counter';
import StyleChanger from './components/StyleChanger/StyleChanger';
import Users from './components/Users/Users';

function App() {

  return (
    <>
      <Counter/>
      <StyleChanger/>
      <Users data={[
        {
          id: 'ergrgr',
          name: 'fbfdbg',
          email: 'fbfdbg',
      }
        ]}/>
    </>
  )
}

export default App
