import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Index from "./components/pages/Index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
