import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import "./styles.css"

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
