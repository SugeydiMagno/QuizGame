import './App.css'
import './components/newButton'

function App() {

  return (
  <div style={{ textAlign: "center"}} >
    <h1>Quiz Game </h1>
    <hr />

  <div class="d-grid gap-2 d-md-block"
  style={{ textAlign: "center"}}>
    <newButton/>
    <button class="btn btn-primary rounded-pill btn-lg" 
    type="button"> 
    Capture Questions 
    </button>

    <button class="btn btn-primary rounded-pill btn-lg" 
    type="button">
    Start playing
    </button>

  </div>
    </div>

    
  )
}
export default App
