import './App.css';
import FunctionalGreeting1 from "./components/FunctionalGreeting1";
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefullGreeting from "./components/StatefullGreeting";
import StatefullGreetingWithCallback from "./components/StatefullGreetingWithCallback";
import StatefullGreetingPreState from "./components/StatefullGreetingPreState";
import HooksCounter from "./components/HooksCounter";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import EventBiding from "./components/EventBiding";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import NestingComponents from "./components/NestingComponents";
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";
import RenderingLists from "./components/RenderingLists";
import Clock from "./components/Clock";
import LifeCyclesCDM from "./components/LifeCyclesCDM";
import LifeCyclesCDU from "./components/LifeCyclesCDU";
import LifeCyclesCWU from "./components/LifeCyclesCWU";
import ControllForm from "./components/ControllForm";
import UnControllForm from "./components/UnControllForm";
import SearchBar from "./components/SearchBar";
import ControllFormHooks from "./components/ControllFormHooks";
import UseStateWithArray from "./components/UseStateWithArray";
import UseStateWithObjects from "./components/UseStateWithObjects";
import ClassCounter from "./components/ClassCounter";
import UseEffectCounter from "./components/UseEffectCounter";
import UseEffectCounterContainer from "./components/UseEffectCounterContainer";
import HTTPRequests from "./components/HTTPRequests";
import HTTPPost from "./components/HTTPPost";
import HTTPHooks from "./components/HTTPHooks";

function App() {
  return (
    // all elements should be placed in this div
    <div className="App"> 
      {/* <FunctionalGreeting name="JohMiken" /> */}
      {/* <StatefulGreeting name="Anna" />
      <HooksCounter name="Mike" /> */}

      {/* <StatefullGreetingPreState greeting="from stateful class component!!!" name="Snizhana"/> */}

      {/* <FunctionalGreeting1 />
      <FunctionalGreeting1 />
      <FunctionalGreeting1 />
      <FunctionalGreeting1 />
      <FunctionalGreetingWithProps greeting='Nice to meet you' name='Mike' age='32' /> */}



      {/* <FunctionalGreeting1>
      
      </FunctionalGreeting1> alternative possible syntax*/}

      {/* <EventsFunctional />
      <EventsClass /> */}

      {/* <EventBiding /> */}
      {/* <ConditionalRenderingClass /> */}
      {/* connected={true} this is props */}
      {/* <ConditionalRenderingFunctional connected={true} /> */}
      {/* <NestingComponents /> */}
      {/* <MethodsAsPropsParent /> */}
      {/* <RenderingLists /> */}
      {/* <Clock /> */}
      {/* <LifeCyclesCDM /> */}
      {/* <LifeCyclesCDU /> */}
      {/* <LifeCyclesCWU /> */}
      {/* <ControllForm /> */}
      {/* <UnControllForm /> */}
      {/* <SearchBar /> */}
      {/* <ControllFormHooks /> */}
      {/* <UseStateWithArray /> */}
      {/* <UseStateWithObjects /> */}
      {/* <ClassCounter /> */}
      {/* <UseEffectCounter /> */}
      {/* <UseEffectCounterContainer /> */}
      {/* <HTTPRequests /> */}
      {/* <HTTPPost /> */}
      <HTTPHooks />
    </div>
  );
}

export default App;