import './App.css';
import FirstPage from './Components/FirstPage';
import Weather from './Components/Weather';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path="/Weather.jsx" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
