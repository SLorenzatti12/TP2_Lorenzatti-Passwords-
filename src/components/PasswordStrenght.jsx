import React from "react";

function PasswordStrength({ password }) {
  const getStrength = () => {
    if (!password) return { label: "", className: "" };

    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 1) return { label: "Poco segura", className: "strength-weak" };
    if (score === 2) return { label: "Segura", className: "strength-medium" };
    if (score >= 3) return { label: "Muy segura", className: "strength-strong" };
  };

  const { label, className } = getStrength();

  return (
    <div className={`password-strength ${className}`}>
      {label && <>Fortaleza: <span>{label}</span></>}
    </div>
  );
}

export default PasswordStrength;