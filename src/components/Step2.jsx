import ReactSwitch from "react-switch";
import { useRegister } from "../context/RegisterContext";
import StepLayout from "./StepLayout";
import { plans } from "../utils/planUtils";

export default function Step2() {
  const { monthlyPayment, toggleMonthlyPayment, selectedPlan, handleSetPlan } =
    useRegister();

  return (
    <StepLayout
      header="Select your plan"
      subtext="You have the option of monthly or yearly billing."
      goBackButton
    >
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-6">
        {plans.map((plan, index) => {
          return (
            <button
              className={`flex flex-col border hover:border-neutralCoolGray duration-200 rounded-md py-4 px-5 h-fit ${
                selectedPlan === index
                  ? "border-neutralCoolGray"
                  : "border-neutralLightGray"
              }`}
              key={index}
              onClick={() => handleSetPlan(index)}
            >
              <img src={plan.icon} alt="Arcade Icon" className="w-[50px]" />
              <p className="text-primaryMarineBlue font-medium pt-5">
                {plan.name}
              </p>
              <span className="text-neutralCoolGray">
                ${monthlyPayment ? `${plan.priceMo}/mo` : `${plan.priceYr}/yr`}
              </span>
              {!monthlyPayment ? (
                <span className="text-sm text-primaryPurplishBlue">
                  2 months free
                </span>
              ) : (
                ""
              )}
            </button>
          );
        })}
        <div className="col-span-3 flex justify-center items-center gap-3 py-2 bg-neutralLightGray rounded-md h-fit">
          <p
            className={`font-medium ${
              monthlyPayment ? "text-primaryMarineBlue" : "text-neutralCoolGray"
            }`}
          >
            Monthly
          </p>
          <ReactSwitch
            checked={!monthlyPayment}
            onChange={toggleMonthlyPayment}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor={"#02295a"}
          />
          <p
            className={`font-medium ${
              monthlyPayment ? "text-neutralCoolGray" : "text-primaryMarineBlue"
            }`}
          >
            Yearly
          </p>
        </div>
      </div>
    </StepLayout>
  );
}
