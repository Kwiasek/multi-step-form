/* eslint-disable react/prop-types */
import { useRegister } from "../context/RegisterContext";

export default function StepLayout({
  children,
  header,
  subtext,
  goBackButton,
}) {
  const { prevStep, nextStep } = useRegister();

  return (
    <div className="flex flex-col h-full pr-20">
      <StepHeader header={header} subtext={subtext} />

      {children}

      {goBackButton ? (
        <div className="flex justify-between">
          <button
            onClick={() => prevStep()}
            className="font-medium text-neutralCoolGray"
          >
            Go Back
          </button>
          <button
            onClick={() => nextStep()}
            className="text-neutralWhite bg-primaryMarineBlue py-2 px-3 w-fit font-medium rounded-md"
          >
            Next Step
          </button>
        </div>
      ) : (
        <button
          onClick={() => nextStep()}
          className="text-neutralWhite bg-primaryMarineBlue py-2 px-3 w-fit font-medium rounded-md self-end"
        >
          Next Step
        </button>
      )}
    </div>
  );
}

function StepHeader({ header, subtext }) {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <h1 className="font-bold text-primaryMarineBlue text-3xl">{header}</h1>
      <span className="text-neutralCoolGray">{subtext}</span>
    </div>
  );
}
