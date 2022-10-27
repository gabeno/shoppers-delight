import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"

function Home() {
  return <h1>Home Page</h1>
}

function Store() {
  return <h1>Store Page</h1>
}

function About() {
  return <h1>About Page</h1>
}

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
  )
}

export default App
