import "./App.css";
import { Route, Routes } from "react-router-dom";
import Hero from "./component/Hero.jsx";
import Login from "./loginAndSignup/Login.jsx";
import Tempuser from "./component/Tempuser.jsx";
import Signup from "./loginAndSignup/Signup.jsx";
import ChatBot from "./component/ChatBot.jsx";
import UserTest from "./loginAndSignup/userTest/UserTest.jsx";
import Page from "./component/HomePage.jsx";
import Dashboard from "./user/Dashboard.jsx";
import Today from "./loginAndSignup/userTest/Today.jsx";
import HomePage from "./component/HomePage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<Tempuser />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/bot" element={<ChatBot />} />
      <Route path="/test" element={<UserTest />} />
      <Route path="/dash" element={<Dashboard />} />
      <Route path="/task-today" element={<Today />} />
    </Routes>
  );
}

export default App;
