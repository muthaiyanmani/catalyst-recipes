import { UserProvider } from "./context/user";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ProtectedRoute from "./components/protected-route";
import DashboardPage from "./pages/dashboard";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
