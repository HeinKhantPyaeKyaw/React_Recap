import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import FavoriteSites from './components/FavoriteSites'
import Profile from './components/Profile'
import Gallery from './components/Gallery'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FavoriteSites/>
      <Profile/>
      <Gallery/>
    </div>
  )
}

export default App
