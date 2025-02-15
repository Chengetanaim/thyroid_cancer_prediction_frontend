import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Predictions } from "./components/predictions";

function App() {
  return (
    <>
      <div className="bg-orange-50">
        <NavBar></NavBar>
        <Hero></Hero>
        <Predictions></Predictions>
      </div>
    </>
  );
}

export default App;
