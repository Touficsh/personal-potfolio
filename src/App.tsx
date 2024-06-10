import About from "./components/About"
import Experience from "./components/Experience"
import NavBar from "./components/NavBar"
import PageHeader from "./components/PageHeader"
import Skills from "./components/Skills"

function App() {

  return (
    <div>
      <NavBar />
      <div className="pt-20">
        <PageHeader />
        <About />
        <Skills />
        <Experience />
      </div>
    </div>
  )
}

export default App
