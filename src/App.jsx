import React, { useState } from 'react';
import PasswordInput from './components/PasswordInput';
import PasswordStrength from './components/PasswordStrenght';
import './components/styles.css';

function App() {
  const [password, setPassword] = useState('');

  return (
    <div className="app-container">
      <h1>Verificador de Contraseñas</h1>
      <PasswordInput password={password} setPassword={setPassword} />
      <PasswordStrength password={password} />
    </div>
  );
}

export default App;