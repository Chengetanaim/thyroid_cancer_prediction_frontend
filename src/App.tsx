import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <div className="bg-orange-50 h-screen">
        <NavBar></NavBar>
        <Hero></Hero>
      </div>
    </>
  );
}

export default App;
