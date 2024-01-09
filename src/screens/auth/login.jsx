import React, { useEffect } from "react";

import LoginForm from "../../components/LoginForm";
import SignupForm from "../../components/SignupForm";
import useFormType from "../../hooks/formType";

function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  const { formType } = useFormType();

  return (
    <div
      className="
    flex 
    min-h-[100vh]
    flex-col
    justify-center
    py-12
    sm:px-6
    lg:px-8
    bg-lightgrey
    bg-gradient-to-r from-secondary to-primary
    "
    >
      {formType === "login" ? <LoginForm /> : <SignupForm />}
    </div>
  );
}

export default Login;
