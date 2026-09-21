import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Recruitment from './pages/Recruitment.jsx';
import Onboarding from './pages/Onboarding.jsx';
import Offboarding from './pages/Offboarding.jsx';
import AiAssistant from './pages/AiAssistant.jsx';

export default function App() {
  return (
    <div>
      <NavBar />
      <main style={{ padding: '1.5rem', marginLeft: '60px' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/offboarding" element={<Offboarding />} />
          <Route path="/ai-assistant" element={<AiAssistant />} />
        </Routes>
      </main>
    </div>
  );
}
