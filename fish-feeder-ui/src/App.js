import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import DeviceListPage from './pages/dashboard';
import DeviceDetailPage from './pages/device';
import { PrivateRoute, PublicRoute } from "./routes/routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<PublicRoute component={<LoginPage />} restricted redirectTo="/dashboard" />}
        />
        <Route
          path="/register"
          element={<PublicRoute component={<RegisterPage />} restricted redirectTo="/login" />}
        />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={<DeviceListPage />} restricted redirectTo="/login" />}
        />
        <Route
          path="/device/:id"
          element={<PrivateRoute component={<DeviceDetailPage />} restricted redirectTo="/login" />}
        />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        {/* <Route path='/dashboard' element={<DeviceListPage />} /> */}
        {/* <Route path="/device/:id" element={<DeviceDetailPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
