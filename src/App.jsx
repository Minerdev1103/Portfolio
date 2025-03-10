import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // นำเข้า Router
import './App.css';
import HomePage from './pages/HomePage';
import RainEffect from './components/RainEffect';
import Pi from './components/Pi'; // เพิ่มการนำเข้า Pi
import Klang from './components/Klang';
import Delivery from './components/Delivery';
import Health from './components/Health';

function App() {
  return (
    <Router>
      <div>
        
        {/* กำหนดเส้นทาง (Route) ที่ต้องการ */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* เส้นทางหน้า HomePage */}
          <Route path="/pi" element={<Pi />} /> {/* เส้นทางหน้า Pi */}
          <Route path="/klang" element={<Klang />} /> {/* เส้นทางหน้า Pi */}
          <Route path="/delivery" element={<Delivery />} /> {/* เส้นทางหน้า Pi */}
          <Route path="/health" element={<Health/>} /> {/* เส้นทางหน้า Pi */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
