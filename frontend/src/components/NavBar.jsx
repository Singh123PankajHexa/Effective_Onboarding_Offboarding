import { NavLink } from 'react-router-dom';
import './NavBar.css';

const icons = {
  dashboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  recruitment: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 4.5c1.6.4 2.8 1.9 2.8 3.6 0 1.7-1.2 3.2-2.8 3.6" />
      <path d="M15.5 14.2c2.6.6 4.5 2.7 4.5 5.8" />
    </svg>
  ),
  onboarding: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 3.5h6a1 1 0 0 1 1 1V6h-8V4.5a1 1 0 0 1 1-1Z" />
      <path d="M8.5 12h7M8.5 16h7" />
    </svg>
  ),
  offboarding: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5" />
      <path d="M15 8l4 4-4 4" />
      <path d="M19 12H9" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="8" width="16" height="11" rx="2.5" />
      <path d="M12 8V4" />
      <circle cx="12" cy="3" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="9" cy="13.5" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13.5" r="1.3" fill="currentColor" stroke="none" />
      <path d="M9 17.5h6" />
    </svg>
  ),
};

const links = [
  { to: '/', label: 'Dashboard', icon: icons.dashboard },
  { to: '/recruitment', label: 'Recruitment', icon: icons.recruitment },
  { to: '/onboarding', label: 'Onboarding', icon: icons.onboarding },
  { to: '/offboarding', label: 'Offboarding', icon: icons.offboarding },
  { to: '/ai-assistant', label: 'AI Assistant', icon: icons.ai },
];

export default function NavBar() {
  return (
    <nav className="sidenav">
      <div className="sidenav-logo">
        <div className="sidenav-logo-badge">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
            <path d="M12 2.5 20.5 7.5V16.5L12 21.5 3.5 16.5V7.5Z" />
          </svg>
        </div>
        <div className="sidenav-logo-text">
          Hexa<span>view</span>
        </div>
      </div>
      <ul className="sidenav-list">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `sidenav-link${isActive ? ' active' : ''}`}
            >
              <span className="sidenav-icon">{link.icon}</span>
              <span className="sidenav-label">{link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
