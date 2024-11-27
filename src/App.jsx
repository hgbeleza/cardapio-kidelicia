import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Menu from './components/Menu'

function App() {
  return (
    <>
      <Header/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <Menu/>
        <Footer/>
      </div>
    </>
  )
}

export default App
