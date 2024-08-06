import React from 'react'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer '
import UserProfile from './components/UserProfile'

function App() {

  return (
     
       <div>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <UserProfile name="Evaline" age="25" bio="Student at ALX" />
        <Footer />
       </div>

  )
}

export default App
