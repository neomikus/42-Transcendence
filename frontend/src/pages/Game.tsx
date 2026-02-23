import Footer from "../components/footer"
import Friends from "../components/friends"
import Header from "../components/header"

function Game() {
  return (
    <div>
      <Header />
      <div className="grid">
        <div className="col-12 lg:col-9">
          <h1>Pagina de Game</h1>
        </div>
        <div className="col-12 lg:col-3">
          <Friends />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Game