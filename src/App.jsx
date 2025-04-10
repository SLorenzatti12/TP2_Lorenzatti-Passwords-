import React, { useState } from "react";
import PasswordInput from "./components/PasswordInput";
import PasswordStrength from "./components/PasswordStrenght";
import "./components/styles.css";

function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">
      <h1>Verificador de Fortaleza</h1>
      <PasswordInput
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      <PasswordStrength password={password} />
    </div>
  );
}

export default App;