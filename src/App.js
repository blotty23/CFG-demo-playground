import "./App.css";
import { Welcome, FunctionalWelcome } from "./Components/Welcome";
import ButtonClicker from "./Components/ButtonClicker";
import IncrementButton from "./Components/IncrementButton";
import IncrementButtonWithState from "./Components/IncrementButtonWithState";
import FunctionalIncrementButton from "./Components/FunctionalIncrementButtonWithState";
import FunctionalButtonClicker from "./Components/FunctionalButtonClicker";
import Button from "./Components/Button";

import ButtonWithState from "./ButtonWithState"

function App() {
    return (
        <div className="App">
            <header className="App-header">
               <ButtonWithState /> 
            </header>
        </div>
    );
}

export default App;
