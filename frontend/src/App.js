import { Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <>
      <Navbar />
      
        <Routes>
            {/* Protected routes */}
            <Route element={<RequireAuth />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
        </Routes>

        <div className='App'>
      <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />     
        </Routes>
      </div>
    </>
  );
}

export default App;
