import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.tsx'
import ProfileSection from './components/Profile.tsx'
import GitHubStatus from './components/GitHubStatus.tsx'

function App() {
  

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
