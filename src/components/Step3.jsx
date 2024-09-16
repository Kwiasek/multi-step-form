import { useRegister } from "../context/RegisterContext";

export default function Step3() {
  const { nextStep, prevStep } = useRegister();

  return (
    <div className="flex flex-col h-full pr-16 w-full">
      <div className="flex-1 flex flex-col gap-2">
        <h1 className="font-bold text-primaryMarineBlue text-3xl">
          Pick add-ons
        </h1>
        <span className="text-neutralCoolGray">
          Add-ons help enhance your gaming experience.
        </span>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => prevStep()}
          className="font-medium text-neutralCoolGray"
        >
          Go Back
        </button>
        <button
          className="text-neutralWhite bg-primaryMarineBlue py-2 px-3 w-fit font-medium rounded-md"
          onClick={() => nextStep()}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
