import "./App.css";
import { Route, Routes } from "react-router-dom";
import Hero from "./component/Hero.jsx";
import Login from "./loginAndSignup/Login.jsx";
import Tempuser from "./component/Tempuser.jsx";
import Signup from "./loginAndSignup/Signup.jsx";
import ChatBot from "./component/ChatBot.jsx";
import UserTest from "./loginAndSignup/userTest/UserTest.jsx";
import Dashboard from "./user/Dashboard.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />

      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<Tempuser />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/bot" element={<ChatBot />} />
      <Route path="/test" element={<UserTest />} />
      <Route path="/dash" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
