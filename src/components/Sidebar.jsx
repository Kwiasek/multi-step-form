import { useRegister } from "../context/RegisterContext";

/* eslint-disable react/prop-types */
export default function Sidebar() {
  const steps = ["your info", "select plan", "add-ons", "summary"];
  const { step } = useRegister();
  return (
    <div className="bg-sidebar-desktop bg-cover bg-bottom w-full h-[500px] sm:w-[300px] rounded-lg flex sm:flex-col sm:pl-12 pt-12 gap-5">
      {steps.map((text, index) => {
        if (index === step) {
          return <Step key={index} step={index} text={text} selected={true} />;
        } else {
          return <Step key={index} step={index} text={text} selected={false} />;
        }
      })}
    </div>
  );
}

function Step({ step, text, selected }) {
  const { jumpToStep } = useRegister();

  return (
    <button
      className="flex gap-3 items-center"
      onClick={() => jumpToStep(step)}
    >
      <div
        className={`rounded-full p-4 w-10 h-10 flex items-center justify-center duration-200 hover:text-black hover:bg-primaryPastelBlue peer-hover:bg-primaryPastelBlue  ${
          selected
            ? "text-black bg-primaryPastelBlue"
            : "border-2 border-primaryPastelBlue text-primaryPastelBlue"
        }`}
      >
        {step + 1}
      </div>
      <div className="flex flex-col items-start peer">
        <span className="text-neutralCoolGray ">STEP {step + 1}</span>
        <p className="font-bold text-neutralWhite uppercase">{text}</p>
      </div>
    </button>
  );
}
