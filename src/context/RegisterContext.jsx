import { createContext, useContext, useState } from "react";

const RegisterContext = createContext();

export function useRegister() {
  return useContext(RegisterContext);
}

// eslint-disable-next-line react/prop-types
export function RegisterProvider({ children }) {
  const [step, setStep] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userTel, setUserTel] = useState("");

  function nextStep() {
    setStep(step + 1);
  }

  function prevStep() {
    setStep(step - 1);
  }

  function jumpToStep(number) {
    setStep(number);
  }

  function toggleMonthlyPayment() {
    setMonthlyPayment(!monthlyPayment);
  }

  function handleSetPlan(number) {
    setSelectedPlan(number);
  }

  const value = {
    step,
    monthlyPayment,
    selectedPlan,
    userName,
    userEmail,
    userTel,
    setUserName,
    setUserEmail,
    setUserTel,
    nextStep,
    prevStep,
    jumpToStep,
    toggleMonthlyPayment,
    handleSetPlan,
  };

  return (
    <RegisterContext.Provider value={value}>
      {children}
    </RegisterContext.Provider>
  );
}
