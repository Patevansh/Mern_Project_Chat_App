import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Left from "./home/left/left";
import Right from "./home/right/right";
import Logout from "./home/left1/Logout";
import { useAuth } from "./context/AuthProvider";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const { authUser, setAuthUser } = useAuth();
  console.log(authUser);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex h-screen">
              <Logout></Logout>
              <Left></Left>
              <Right></Right>
            </div>
          }
        />
      </Routes>
      {/* <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen">
                <Logout></Logout>
                <Left></Left>
                <Right></Right>
              </div>
            ) : (
              <Login></Login>
            )
          }
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to={"/"} /> : <Signup />}
        >
          {" "}
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
