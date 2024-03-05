import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data"
import './App.css';

function App() {

  const cardElement = data.map( card => {
    return (
      <Card 
        key = { card.id }
        card = { card }
      />
    )
  })

  return (
    <>
      <Navbar />
      <section>
        { cardElement }
      </section>
    </>
  )
}

export default App
