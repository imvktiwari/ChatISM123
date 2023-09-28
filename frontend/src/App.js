import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <>
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </>
  );
}

export default App;
