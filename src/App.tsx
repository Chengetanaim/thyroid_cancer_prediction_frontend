import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Predictions } from "./components/predictions";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <div className="bg-orange-50">
        <NavBar></NavBar>
        <Hero></Hero>
        <Predictions></Predictions>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
