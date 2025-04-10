import React, { useState } from 'react';

function PasswordInput({ password, setPassword }) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let newPassword = "";
    for (let i = 0; i < 12; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  return (
    <div className="password-input">
      <input
        type={visible ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Ingresá tu contraseña"
      />
      <button onClick={toggleVisibility}>
        {visible ? "Ocultar" : "Mostrar"}
      </button>
      <button onClick={handleCopy}>Copiar</button>
      <button onClick={generatePassword}>Generar</button>
      {copied && <span className="copied-msg">¡Copiado al portapapeles!</span>}
    </div>
  );
}

export default PasswordInput;