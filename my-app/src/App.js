import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Post from "./pages/Post";

// JSX 문법
function App() {
  //const [number, setNumber] = useState(0);

  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
      <Route path="/post/:id" exact={true} component={Post} />
    </div>
  );
}

export default App;
