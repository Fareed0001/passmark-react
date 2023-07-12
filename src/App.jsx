import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Dashboard from "./pages/Dashboard";
import DashboardClass from "./pages/DashboardClass";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/DashboardClass" element={<DashboardClass />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
