import React from 'react';

function PasswordStrength({ password }) {
  const getStrength = () => {
    if (password.length < 6) return "Poco segura";
    if (/[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password)) {
      if (password.length >= 12) return "Muy segura";
      return "Segura";
    }
    return "Poco segura";
  };

  return (
    <div className="password-strength">
      <strong>Seguridad:</strong> {getStrength()}
    </div>
  );
}

export default PasswordStrength;