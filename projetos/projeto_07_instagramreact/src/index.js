import ReactDOM from "react-dom";
import Corpo from "./Corpo";
import Topo from "./Topo";

function App(){
    return (
        <div>
            <Topo />
            <Corpo />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));
