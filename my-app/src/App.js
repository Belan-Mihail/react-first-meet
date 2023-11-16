import './App.css';
import FunctionalGreeting1 from "./components/FunctionalGreeting1";
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefullGreeting from "./components/StatefullGreeting";
import StatefullGreetingWithCallback from "./components/StatefullGreetingWithCallback";
import HooksCounter from "./components/HooksCounter";

function App() {
  return (
    // all elements should be placed in this div
    <div className="App"> 
      {/* <FunctionalGreeting name="JohMiken" /> */}
      {/* <StatefulGreeting name="Anna" />
      <HooksCounter name="Mike" /> */}

      <StatefullGreetingWithCallback greeting="from stateful class component!!!" name="Snizhana"/>

      {/* <FunctionalGreeting1 />
      <FunctionalGreeting1 />
      <FunctionalGreeting1 />
      <FunctionalGreeting1 />
      <FunctionalGreetingWithProps greeting='Nice to meet you' name='Mike' age='32' /> */}



      {/* <FunctionalGreeting1>
      
      </FunctionalGreeting1> alternative possible syntax*/}
    </div>
  );
}

export default App;