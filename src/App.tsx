import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import PageHeader from "./components/PageHeader"
import Skills from "./components/Skills"
import Work from "./components/Work"

function App() {

  return (
    <div>
      <NavBar />
      <div className="pt-20">
        <PageHeader />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
