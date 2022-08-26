import Login from "../src/pages/Login";
import SignUp from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import "./App.css";
import { useState } from "react";

function App() {
  const [card, setCardDisplay] = useState(null);
  const [greetMessage, setGreetMessageDisplay] = useState(null);

  function handleDisplayCard(message){
    setCardDisplay({message:message})
    setGreetMessageDisplay({greetMessage:greetMessage})
  }

  function toggleSignInAlert(){
    setCardDisplay("You have signed in successfully");
    setGreetMessageDisplay("Welcome back!");
    setTimeout(() => {
      setCardDisplay(null)
      setGreetMessageDisplay(null);
    }
    , 2000);

  }
  function toggleSignUpAlert(){
    setCardDisplay("You have registered successfully");
    setGreetMessageDisplay("Congratulations!");
    setTimeout(() => {
      setCardDisplay(null)
      setGreetMessageDisplay(null);
    }
    , 2000);
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Alert alertText={card} greetText={greetMessage} displayState={handleDisplayCard}/>
        <Routes>
          <Route path="/" element={<Login toggleAlert={toggleSignInAlert}/>}></Route>
          <Route path="/signUp" element={<SignUp toggleSignUpAlert={toggleSignUpAlert}/>}></Route>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
