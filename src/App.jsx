// import Login from "./Components/Login"
// import Home from "./Components/Home";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// function App() {
//   return (
//     <>
    
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Login/>}></Route>
//       <Route path="/home" element={<Home/>}></Route>
//     </Routes>
//   </BrowserRouter>
//     </>
//   )
// }

// export default App



import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./Context/AuthContext";
import Login from "./Components/Login";
import Home from "./Components/Home";

function ProtectedRoute({ element, ...rest }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    element
  ) : (
    <Navigate to="/" replace state={{ from: rest.location }} />
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={<ProtectedRoute element={<Home />} />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;



