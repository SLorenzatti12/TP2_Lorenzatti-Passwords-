import React, { useState } from "react";

function PasswordInput({ password, setPassword, showPassword, setShowPassword }) {
  const [copied, setCopied] = useState(false);

  const toggleVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // Oculta el mensaje luego de 3 segundos
  };

  const generatePassword = () => {
    const length = 10;
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Ingresá tu contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <div>
        <button onClick={toggleVisibility}>
          {showPassword ? "Ocultar" : "Mostrar"}
        </button>
        <button onClick={copyToClipboard} disabled={!password}>
          Copiar
        </button>
        <button onClick={generatePassword}>
          Generar
        </button>
      </div>

      {copied && (
        <div style={{ marginTop: "10px", color: "#34a853", fontWeight: "bold" }}>
          ¡Contraseña copiada al portapapeles!
        </div>
      )}
    </div>
  );
}

export default PasswordInput;