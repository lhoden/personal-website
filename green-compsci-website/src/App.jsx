import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import { Chip, Rating } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MantineProvider>
        <Header></Header>
        <Chip defaultChecked>Okay here we go</Chip>
        <Rating defaultValue={4}/>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </MantineProvider>
      <Footer></Footer>
    </>
  )
}

export default App
