import './App.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/footer"
import Pages from './routing'

function App() {

  return (
    <>
     <Header/>
      <main className="main">
        <Pages/>
      </main>
      <Footer/>
   </>
  )
}

export default App
