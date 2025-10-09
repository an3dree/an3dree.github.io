import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar.tsx'
import ProfileSection from './components/Profile.tsx'
import GitHubStatus from './components/GitHubStatus.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main>
        <ProfileSection />
        <GitHubStatus />
      </main>
    </>
  )
}

export default App
