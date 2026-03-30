import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.replace('/shaivam/index.html');
  }, []);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#FAF9F6',
      fontFamily: "'Cormorant Garamond', serif"
    }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '2rem', color: '#D35400', marginBottom: '0.5rem' }}>ॐ Shaivam</p>
        <p style={{ color: '#757575', fontSize: '0.95rem' }}>Loading...</p>
      </div>
    </div>
  );
}

export default App;
