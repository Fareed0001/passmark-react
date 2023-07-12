import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Dashboard from "./pages/Dashboard";
import DashboardClasses from "./pages/DashboardCLasses";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/DashboardClasses" element={<DashboardClasses />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
