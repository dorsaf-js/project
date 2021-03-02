import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Components/MovieList";
import { BrowserRouter, Route } from "react-router-dom";
import Description from "./Components/Description";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={MovieList} />
        <Route path="/description/:title" component={Description} />
      </BrowserRouter>
    </div>
  );
}

export default App;
