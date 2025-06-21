import { useState, Suspense, lazy } from 'react';

const MusicLibrary = lazy(() => import('music_library/MusicLibrary'));

const roles = {
  admin: 'admin',
  user: 'user',
};

const credentials = {
  admin: 'adminpass',
  user: 'userpass',
};

export default function App() {
  const [role, setRole] = useState(localStorage.getItem('role'));

  const login = (enteredRole, password) => {
    if (credentials[enteredRole] === password) {
      localStorage.setItem('role', enteredRole);
      setRole(enteredRole);
    } else {
      alert('Wrong password');
    }
  };

  const logout = () => {
    localStorage.removeItem('role');
    setRole(null);
  };

  const baseStyle = {
    background: '#1c1c1e',
    color: '#f1f1f3',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const loginBoxStyle = {
    height:"200px",
    width:"200px",
    padding: '2rem',
    borderRadius: '10px',
    background: '#2c2c2e',
    boxShadow: '0 0 12px rgba(255, 255, 255, 0.1)',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#d1989b', // dusty pink
    color: '#fff',
    border: 'none',
    padding: '0.6rem 1.2rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  if (!role) {
    return (
      <div style={baseStyle}>
        <div style={loginBoxStyle}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Login</h2>
          {Object.keys(roles).map((r) => (
            <div key={r} style={{ marginBottom: '1rem' }}>
              <button
                onClick={() => login(r, prompt(`Password for ${r}?`))}
                style={buttonStyle}
              >
                Login as {r}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ ...baseStyle, display: 'block', padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.8rem' }}>Main App ({role})</h1>
        <button
          onClick={logout}
          style={{
            ...buttonStyle,
            backgroundColor: 'transparent',
            color: '#d1989b',
            border: '1px solid #d1989b',
          }}
        >
          Logout
        </button>
      </div>

      <Suspense fallback={<div>Loading Music Library...</div>}>
        <MusicLibrary role={role} />
      </Suspense>
    </div>
  );
}