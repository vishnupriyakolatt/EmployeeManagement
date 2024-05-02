import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './routes/adminRoutes'; // Import Admin component
import User from './routes/userRoutes'; // Import User component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<Admin/>} />
        <Route path="/*" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

