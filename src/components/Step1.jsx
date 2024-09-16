import { useRegister } from "../context/RegisterContext";
import StepLayout from "./StepLayout";

/* eslint-disable react/prop-types */
export default function Step1() {
  const {
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    userTel,
    setUserTel,
  } = useRegister();

  return (
    <StepLayout
      header="Personal Info"
      subtext="Please provide your name, email address, and phone number."
    >
      <form className="flex-1 flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <Label name="name" text="name" />
          <Input
            name="name"
            type="text"
            placeholder="e.g. Stephen King"
            tabIndex={0}
            value={userName}
            onChange={setUserName}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label name="email" text="email adress" />
          <Input
            name="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            value={userEmail}
            onChange={setUserEmail}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label name="tel" text="phone number" />
          <Input
            name="tel"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={userTel}
            onChange={setUserTel}
          />
        </div>
      </form>
    </StepLayout>
  );
}

function Label({ name, text }) {
  return (
    <label
      htmlFor={name}
      className="text-primaryMarineBlue font-medium capitalize"
    >
      {text}
    </label>
  );
}

function Input({ name, type, placeholder, onChange, value, pattern }) {
  return (
    <input
      type={type}
      name={name}
      className="border border-neutralCoolGray rounded-md py-2 indent-3 w-full font-medium"
      placeholder={placeholder}
      value={value}
      pattern={pattern && pattern}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
