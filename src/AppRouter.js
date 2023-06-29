import React from 'react';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './Components/User';
import Signup from './Components/Signup';
const AppRouter = () => {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/user" element={<User />}></Route>

      </Routes>
    </BrowserRouter>
      );
};
export default AppRouter;