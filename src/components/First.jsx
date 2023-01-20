import React from "react";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const First = () => {
  const [form, setForm] = useState("login");

  const changeForm = () => {
    if (form === "login") {
      setForm("register");
    } else {
      setForm("login");
    }
  };

  return (
    <div>
      <h2>Первая задача:</h2>
      {form === "login" ? <LoginForm /> : <RegisterForm />}
      <button onClick={changeForm}>Сменить форму</button>
    </div>
  );
};

export default First;
