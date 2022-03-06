import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Homepage from "./pages/Homepage/Homepage";
import "./App.css";
import { ProtectedRoute } from "./routes/ProtectedRoutes";
import { PublicRoute } from "./routes/PublicRoutes";

function App() {
  return (
    <BrowserRouter>
      <div id="modal-root" />
      <div className="App" style={{ margin: "0px", padding: "0px" }}>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
